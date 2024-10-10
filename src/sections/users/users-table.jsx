import PropTypes from "prop-types";
import { format } from "date-fns";
import numeral from "numeral";
import {
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { Scrollbar } from "../../components/scrollbar";

const UsersTable = ({ users }) => {
  return (
    <Card>
      <CardHeader
        action={
          <Button color="inherit" component="a" href="#">
            View All
          </Button>
        }
        title="See All Users"
      />
      <Divider />
      <Scrollbar>
        <Table sx={{ minWidth: 500 }}>
          <TableBody>
            {users &&
              users.length > 0 &&
              users?.map((user) => {
                // const createdDate = format(user.createdAt, 'dd MMM');
                // const amountSpent = numeral(user.amountSpent).format('$0,0.00');

                return (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Stack alignItems="center">
                        <Typography variant="subtitle2">
                          {user.displayName}
                        </Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>
                      <Stack alignItems="center">
                        <Typography variant="subtitle2">
                          {user.email}
                        </Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>
                      <Stack alignItems="center">
                        <Typography variant="subtitle2">
                          {user.password}
                        </Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>
                      <Typography noWrap variant="body2">
                        {user.username}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography noWrap variant="body2">
                        {user.password}
                      </Typography>
                    </TableCell>

                    {/* <TableCell>
                      <Typography
                        color="text.secondary"
                        noWrap
                        variant="body2"
                      >
                        <Typography
                          color="text.primary"
                          component="span"
                          variant="subtitle2"
                        >
                          {user.orders}
                        </Typography>
                        {' '}
                        orders placed
                      </Typography>
                      <Typography
                        color="text.secondary"
                        noWrap
                        variant="body2"
                      >
                        <Typography
                          color="text.primary"
                          component="span"
                          variant="subtitle2"
                        >
                          {amountSpent}
                        </Typography>
                        {' '}
                        spent
                      </Typography>
                    </TableCell>

                    <TableCell align="right">
                      {user.isOnboarded && (
                        <Chip
                          color="primary"
                          label="Onboarded"
                          size="small"
                        />
                      )}
                    </TableCell> */}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  );
};

export default UsersTable;

UsersTable.propTypes = {
  customers: PropTypes.array,
};
