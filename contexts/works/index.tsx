/**
 *
 * WorksProvider
 *
 */

import { createContext, Reducer, useContext, useMemo, useReducer } from "react";

/**
 * Inicializacion del context de Works
 *
 */
const WorksContext = createContext<ReturnType<typeof useWorksContext> | null>(
  null
);

interface ICategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  parent: string;
  count: number;
}

interface IWorksState {
  categories: ICategory[];
}

interface IWorksContext {
  worksState: IWorksState;
}

enum ActionTypes {
  SET_CATEGORIES = "SET_CATEGORIES",
  GET_CATEGORIES = "GET_CATEGORIES",
}

const worksInitialState = {
  categories: [],
};

function worksReducer(
  state: IWorksState,
  action: { type: keyof typeof ActionTypes; payload: any }
): IWorksState {
  const { categories } = state;

  const { type, payload } = action;

  switch (type) {
    case ActionTypes.SET_CATEGORIES:
      const { categories } = payload;
      return { ...state };

    default:
      return { ...state };
  }
}

/**
 * Context Provider Component del WorksContext
 * @returns JSX.Element
 */
function WorksProvider({ children }: any) {
  const [worksState, dispatch] = useReducer<Reducer<IWorksState, any>>(
    worksReducer,
    worksInitialState
  );

  const worksContext: IWorksContext = useMemo(
    () => ({
      worksState,
    }),
    [worksState]
  );

  return (
    <WorksContext.Provider value={worksContext}>
      {children}
    </WorksContext.Provider>
  );
}

/**
 * Hook para usar el contexto de Works
 *
 */
function useWorksContext(): IWorksContext {
  const context = useContext(WorksContext)!;

  if (context === undefined) {
    throw new Error("useWorksContext must be used within a WorksProvider");
  }
  return context;
}

export { WorksProvider, useWorksContext };
