// import { useProducts } from "../hooks";
// import { convertDate } from '../utils';

// import { Box, Button, Input } from "@mui/material";
// import Modal from '@mui/material/Modal';
// import Typography from '@mui/material/Typography';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const style = {
// 	position: 'absolute',
// 	top: '50%',
// 	left: '50%',
// 	transform: 'translate(-50%, -50%)',
// 	width: 400,
// 	bgcolor: 'background.paper',
// 	border: '2px solid #000',
// 	boxShadow: 24,
// 	p: 4,
// };

// const Products = ({ }) => {
//     const {
//         loading,
//         products,
//         error,
//     } = useProducts();

//     return (
//         <Box
//             sx={{
//                 padding: '2rem'
//             }}
//         >
//             {/* <Button
//                 color="primary"
//                 variant="contained"
//                 sx={{
//                     marginBlock: '1.5rem'
//                 }}
//                 onClick={() => setIsAddAdminModalOpen(true)}
//             >
//                 <AddIcon /> Add Admin
//             </Button> */}
//             {/* <Modal
//             open={isAddAdminModalOpen}
//             onClose={() => setIsAddAdminModalOpen(false)}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//             >
//             <Box sx={style}>
//                 <form onSubmit={handleAddAdmin} >
//                 <Typography
//                     variant='h2'
//                     color='primary'
//                     sx={{
//                     textAlign: 'center',
//                     fontSize: '1.5em'
//                     }}
//                 >
//                     Create a New Admin
//                 </Typography>
//                 <Box
//                     sx={{
//                     marginTop: '1rem',
//                     display: 'flex',
//                     flexDirection: 'column'
//                     }}
//                 >
//                     <Input
//                     placeholder='Firstname'
//                     name='firstname'
//                     value={newAdminData.firstname}
//                     onChange={handlechange}
//                     sx={{
//                         marginBottom: '3rem',
//                         textAlign: 'center'
//                     }}
//                     />
//                     <Input
//                     placeholder='Lastname'
//                     name='lastname'
//                     value={newAdminData.lastname}
//                     onChange={handlechange}
//                     sx={{
//                         marginBottom: '3rem',
//                         textAlign: 'center'
//                     }}
//                     />
//                     <Input
//                     placeholder='Email'
//                     name='email'
//                     value={newAdminData.email}
//                     onChange={handlechange}
//                     sx={{
//                         marginBottom: '3rem',
//                         textAlign: 'center'
//                     }}
//                     />
//                     <Input
//                     placeholder='Phone'
//                     name='phonenumber'
//                     value={newAdminData.phonenumber}
//                     onChange={handlechange}
//                     sx={{
//                         marginBottom: '3rem',
//                         textAlign: 'center'
//                     }}
//                     />
//                     <Input
//                     placeholder='Password'
//                     name='password'
//                     value={newAdminData.password}
//                     type="password"
//                     onChange={handlechange}
//                     sx={{
//                         marginBottom: '3rem',
//                         textAlign: 'center'
//                     }}
//                     />
//                     <Input
//                     placeholder='Confirm Password'
//                     name='confirmPassword'
//                     value={newAdminData.confirmPassword}
//                     type="password"
//                     onChange={handlechange}
//                     sx={{
//                         marginBottom: '3rem',
//                         textAlign: 'center'
//                     }}
//                     />
//                     <Button
//                     color='primary'
//                     variant='contained'
//                     type='submit'
//                     sx={{
//                         alignSelf: 'center',
//                         marginTop: '1rem',
//                         padding: '.5rem 3rem'
//                     }}
//                     >
//                     Add Admin
//                     </Button>
//                 </Box>
//                 </form>
//             </Box>
//             </Modal> */}
//             {(!loading && !error && products.length !== 0) ? (
//                 <TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell align="right">Product ID</TableCell>
//                             <TableCell align="right">Name</TableCell>
//                             <TableCell align="right">Description</TableCell>
//                             <TableCell align="right">Product Quality</TableCell>
//                             <TableCell align="right">Quantity</TableCell>
//                             <TableCell align="right">Size</TableCell>
//                             <TableCell align="right">Price</TableCell>
//                             <TableCell align="right">Bit Amount</TableCell>
//                             <TableCell align="right">Creator</TableCell>
//                             <TableCell align="right">Created At</TableCell>
//                         </TableRow>
//                         </TableHead>
//                         <TableBody>
//                         {products.map((product, index) => (
//                             <TableRow
//                                 key={index}
//                                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                             >
//                                 <TableCell align="right">{product.productid}</TableCell>
//                                 <TableCell align="right">{product.name}</TableCell>
//                                 <TableCell align="right">{product.description}</TableCell>
//                                 <TableCell align="right">{product.productQuality}</TableCell>
//                                 <TableCell align="right">{product.quantity}</TableCell>
//                                 <TableCell align="right">{product.size}</TableCell>
//                                 <TableCell align="right">{product.productAmount}</TableCell>
//                                 <TableCell align="right">{product.bidAmount}</TableCell>
//                                 <TableCell align="right">{product.creator}</TableCell>
//                                 <TableCell align="right">{convertDate(product.createdAt)}</TableCell>
//                             </TableRow>
//                         ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             ): (
//                 loading ? (
//                     <h1>LOADING...</h1>
//                 ) : products.length === 0 ? (
//                     <h1>No Records Found...</h1>
//                 ) : (
//                     <h1>Something Went Wrong...</h1>
//                 )
//             )}
//         </Box>
//     );
// };

// export default Products;

import Pagination from "../components/pagination";
import { useProducts } from "../hooks";
import { convertDate } from "../utils";
import {
  Box,
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Modal,
  TextField,
} from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search
  const { loading, products, error, currentPage, totalPages, changePage } =
    useProducts(searchQuery);
  const handleOpenDetailModal = (product) => {
    setSelectedProduct(product);
    setDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setSelectedProduct(null);
    setDetailModalOpen(false);
  };

  // Filter products based on search query

  return (
    <Box sx={{ padding: "2rem" }}>
      <TextField
        label="Search Products"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ marginBottom: "1rem" }}
      />
      {loading && (
        <CircularProgress sx={{ display: "block", margin: "auto" }} />
      )}
      {error && (
        <Typography color="error" align="center">
          Something went wrong...
        </Typography>
      )}
      {!loading && products.length === 0 && (
        <Typography align="center">No Records Found...</Typography>
      )}
      {!loading && products.length > 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white" }} align="right">
                  Product ID
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  Name
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  Description
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  Product Quality
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  Quantity
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  Size
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  Price
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  Bit Amount
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  Creator
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  Created At
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.productid}
                  sx={{
                    "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                    "&:hover": { backgroundColor: "#e0e0e0" },
                  }}
                >
                  <TableCell align="right">{product.productid}</TableCell>
                  <TableCell align="right">{product.name}</TableCell>
                  <TableCell align="right">{product.description}</TableCell>
                  <TableCell align="right">{product.productQuality}</TableCell>
                  <TableCell align="right">{product.quantity}</TableCell>
                  <TableCell align="right">{product.size}</TableCell>
                  <TableCell align="right">{product.productAmount}</TableCell>
                  <TableCell align="right">{product.bidAmount}</TableCell>
                  <TableCell align="right">{product.creator}</TableCell>
                  <TableCell align="right">
                    {convertDate(product.createdAt)}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleOpenDetailModal(product)}
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination
            paginatedItem={{
              currentPage: currentPage,
              lastPage: totalPages,
            }}
            changePage={changePage}
            disablePagination={loading}
          />
        </TableContainer>
      )}

      {/* Detail Modal */}
      <Modal
        open={isDetailModalOpen}
        onClose={handleCloseDetailModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          {selectedProduct && (
            <>
              <Typography
                variant="h6"
                id="modal-title"
                component="h2"
                sx={{ textAlign: "center", marginBottom: "1rem" }}
              >
                Product Details
              </Typography>
              <img
                src={`${import.meta.env.VITE_APP_LINK_FOR_EXTERNAL_RESOURCES}${
                  selectedProduct.image
                }`}
                alt=""
                style={{
                  width: "330px",
                  height: "100px",
                }} // Responsive image
              />
              <Typography variant="body1">
                <strong>Product ID:</strong> {selectedProduct.productid}
              </Typography>
              <Typography variant="body1">
                <strong>Name:</strong> {selectedProduct.name}
              </Typography>
              <Typography variant="body1">
                <strong>Description:</strong> {selectedProduct.description}
              </Typography>
              <Typography variant="body1">
                <strong>Quality:</strong> {selectedProduct.productQuality}
              </Typography>
              <Typography variant="body1">
                <strong>Quantity:</strong> {selectedProduct.quantity}
              </Typography>
              <Typography variant="body1">
                <strong>Size:</strong> {selectedProduct.size}
              </Typography>
              <Typography variant="body1">
                <strong>Price:</strong> {selectedProduct.productAmount}
              </Typography>
              <Typography variant="body1">
                <strong>Bit Amount:</strong> {selectedProduct.bidAmount}
              </Typography>
              <Typography variant="body1">
                <strong>Creator:</strong> {selectedProduct.creator}
              </Typography>
              <Typography variant="body1">
                <strong>Created At:</strong>{" "}
                {convertDate(selectedProduct.createdAt)}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCloseDetailModal}
                sx={{ marginTop: "1rem" }}
              >
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Products;
