import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import { uploadImageToCloudinary } from "./../util/uploadToCloudinary";
import { Provider } from "react-redux";

const initialValues = {
  name: "",
  description: "",
  price: "",
  category: "",
  restaurantId: "",
  vegetarian: true,
  seasonal: false,
  ingredients: [],
  images: [],
};
const CreateMenuForm = () => {
  const [uploadImage, setUploadImage] = useState(false);

  const Formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      values.restaurantId = 2;

      console.log("data", values);
    },
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    setUploadImage(true);
    const image = await uploadImageToCloudinary(file);
    Formik.setFieldValue("images", [...Formik.values.images, image]);

    setUploadImage(false);
  };
  const handleImageRemove = (index) => {
    const updatedImages = [...Formik.values.images];

    updatedImages.splice(index, 1);

    Formik.setFieldValue("images", updatedImages);
  };
  return (
    <div className="py-10 px-5 lg:flex items-center justify-center min-h-screen">
      <div className="lg:max-w-4xl">
        <h1 className="font-bold text-2xl text-center py-2">
          Add New Menu
        </h1>

        <form onSubmit={Formik.handleSubmit} className="space-y-4">
          <Grid container spacing={2}>
            <Grid className="flex flex-wrap gap-5" item xs={12}>
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
              ></input>

              <label className="relative" htmlFor="fileInput">
                <span
                  className="w-24 h-24 cursor-pointer flex items-center
                p-3 border rounded-md border-gray-600"
                >
                  <AddPhotoAlternateIcon className="text-white" />
                </span>

                {uploadImage && (
                  <div
                    className="absolute left-0 right-0 top-0 bottom-0 w-24 flex
                  justify-center items-center  "
                  >
                    <CircularProgress />
                  </div>
                )}
              </label>
              <div className="flex flex-wrap gap-2">
                {Formik.values.images.map((image, index) => (
                  <div className="relative">
                    <img
                      src={image}
                      alt="images"
                      className="w-24 h-24 object-cover"
                    />
                    <IconButton
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        outline: "none",
                      }}
                      onClick={() => handleImageRemove(index)}
                    >
                      <CloseIcon sx={{ fontSize: "1 rem" }}></CloseIcon>
                    </IconButton>
                  </div>
                ))}
              </div>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                onChange={Formik.handleChange}
                value={Formik.values.name}
              ></TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                variant="outlined"
                onChange={Formik.handleChange}
                value={Formik.values.description}
              ></TextField>
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="price"
                name="price"
                label="Price"
                variant="outlined"
                onChange={Formik.handleChange}
                value={Formik.values.price}
              ></TextField>
            </Grid>

            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Formik.values.category}
                  label="Category"
                  onChange={Formik.handleChange}
                  name="category"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-multiple-chip-label">Ingredients</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  name="ingredients"
                  multiple
                  value={Formik.values.ingredients}
                  onChange={Formik.handleChange}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Ingredients" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  //MenuProps={MenuProps}
                >
                  {["bread", "butter", "cheese"].map((name, index) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Is seasional</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Formik.values.seasonal}
                  label="Is seasonal"
                  onChange={Formik.handleChange}
                  name="seasonal"
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Is Vegetarian</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Formik.values.vegetarian}
                  label="Is Vegetarian"
                  onChange={Formik.handleChange}
                  name="vegetarian"
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Button
            className=""
            variant="conatined"
            color="primary"
            type="submit"
          >
            Create Restaurant
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateMenuForm;
