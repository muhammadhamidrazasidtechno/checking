import clsx from "clsx";
import { FC, PropsWithChildren, useMemo } from "react";
import { HeaderProps } from "react-table";
import { initialQueryState } from "../../../../../../../_metronic/helpers";
import { useQueryRequest } from "../../core/QueryRequestProvider";
import { User } from "../../core/_models";

type Props = {
  className?: string;
  title?: string;
  tableProps: PropsWithChildren<HeaderProps<User>>;
};

const UserCustomHeader: FC<Props> = ({ className, title, tableProps }) => {
  const id = tableProps.column.id;
  const { state, updateState } = useQueryRequest();

  const isSelectedForSorting = useMemo(() => {
    return state.sort && state.sort === id;
  }, [state, id]);

  const order: "asc" | "desc" | undefined = useMemo(() => state.order, [state]);

  const sortColumn = () => {
    // Avoid sorting for these columns
    if (id === "actions" || id === "selection") {
      return;
    }

    if (!isSelectedForSorting) {
      // Enable sort asc
      updateState({ sort: id, order: "asc", ...initialQueryState });
      return;
    }

    if (isSelectedForSorting && order !== undefined) {
      if (order === "asc") {
        // Enable sort desc
        updateState({ sort: id, order: "desc", ...initialQueryState });
        return;
      }

      // Disable sort
      updateState({ sort: undefined, order: undefined, ...initialQueryState });
    }
  };

  return (
    <th
      {...tableProps.column.getHeaderProps()}
      className={clsx(
        className,
        isSelectedForSorting && order !== undefined && `table-sort-${order}`
      )}
      style={{ cursor: "pointer" }}
      onClick={sortColumn}
      key={id} // Use the column ID as the key
    >
      {title}
    </th>
  );
};

export { UserCustomHeader };
