import { TDBinding, TDShape, TDUser, TldrawApp } from "@coop/draw";
import { useCallback, useEffect, useState } from "react";

import * as Y from "yjs";
import { yjsStateType } from "@common/recoil/recoil.atom";
import { Room } from "@y-presence/client";

export function useMultiplayerState({
  roomId,
  doc,
  provider,
  customUserId,
}: yjsStateType & { customUserId: string }) {
  const yShapes: Y.Map<TDShape> = doc.getMap("shapes");
  const yBindings: Y.Map<TDBinding> = doc.getMap("bindings");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const undoManager = new Y.UndoManager([yShapes, yBindings]);

  const [app, setApp] = useState<TldrawApp>();
  const [loading, setLoading] = useState(true);

  const onMount = useCallback(
    (app: TldrawApp) => {
      app.loadRoom(roomId);
      app.pause();
      setApp(app);
    },
    [roomId]
  );

  const onChangePage = useCallback(
    (
      app: TldrawApp,
      shapes: Record<string, TDShape | undefined>,
      bindings: Record<string, TDBinding | undefined>
    ) => {
      undoManager.stopCapturing();
      doc.transact(() => {
        Object.entries(shapes).forEach(([id, shape]) => {
          if (!shape) {
            yShapes.delete(id);
          } else {
            yShapes.set(shape.id, shape);
          }
        });
        Object.entries(bindings).forEach(([id, binding]) => {
          if (!binding) {
            yBindings.delete(id);
          } else {
            yBindings.set(binding.id, binding);
          }
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onUndo = useCallback(() => {
    undoManager.undo();
  }, [undoManager]);

  const onRedo = useCallback(() => {
    undoManager.redo();
  }, [undoManager]);

  const room = new Room(provider.awareness);
  console.log(provider);

  const onChangePresence = useCallback((app: TldrawApp, user: TDUser) => {
    if (!app.room) return;
    user.id += `|${customUserId}`;
    room.setPresence({ id: app.room.userId, tdUser: user });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Update app users whenever there is a change in the room users
   */
  useEffect(() => {
    if (!app || !room) return;

    const unsubOthers = room.subscribe("others", (users: any[]) => {
      if (!app.room) return;

      const ids = users
        .filter((user: { presence: any }) => user.presence)
        .map((user: { presence: any }) => user.presence!.tdUser.id);

      Object.values(app.room.users).forEach((user) => {
        if (user && !ids.includes(user.id) && user.id !== app.room?.userId) {
          app.removeUser(user.id);
        }
      });

      app.updateUsers(
        users
          .filter((user) => user.presence)
          .map((other) => other.presence!.tdUser)
          .filter(Boolean)
      );
    });

    return () => {
      unsubOthers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app]);

  useEffect(() => {
    if (!app) return;

    function handleDisconnect() {
      provider.disconnect();
    }

    window.addEventListener("beforeunload", handleDisconnect);

    function handleChanges() {
      app?.replacePageContent(
        Object.fromEntries(yShapes.entries()),
        Object.fromEntries(yBindings.entries()),
        {}
      );
    }

    async function setup() {
      yShapes.observeDeep(handleChanges);
      handleChanges();
      setLoading(false);
    }

    setup();

    return () => {
      window.removeEventListener("beforeunload", handleDisconnect);
      yShapes.unobserveDeep(handleChanges);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app]);

  useEffect(() => {
    console.log("provider.roomName : ", provider.roomName);
  }, [provider.roomName]);

  return {
    onMount,
    onChangePage,
    onUndo,
    onRedo,
    loading,
    onChangePresence,
  };
}
