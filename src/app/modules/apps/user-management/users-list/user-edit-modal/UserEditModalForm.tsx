import { FC, useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { isNotEmpty, toAbsoluteUrl } from "../../../../../../_metronic/helpers";
import { initialUser, User } from "../core/_models";
import clsx from "clsx";
import { useListView } from "../core/ListViewProvider";
import { UsersListLoading } from "../components/loading/UsersListLoading";
import { createUser, updateUser } from "../core/_requests";
import { useQueryResponse } from "../core/QueryResponseProvider";

type Props = {
  isUserLoading: boolean;
  user: User;
  EditMode: any;
};

const editUserSchema = Yup.object().shape({
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  first_name: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("First name is required"),
  last_name: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Second name is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
});

const UserEditModalForm: FC<Props> = ({ user, isUserLoading, EditMode }) => {
  const { setItemIdForUpdate } = useListView();
  const { refetch } = useQueryResponse();

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<string>("");
  const [avatar, setAvatar] = useState<any | null>(user.avatar || null);
  const [Con, setCon] = useState<boolean>(false);
  const [userForEdit] = useState<User>({
    ...user,
    avatar: user.avatar || initialUser.avatar,
    role: user.role || initialUser.role,
    position: user.position || initialUser.position,
    email: user.email || initialUser.email,
    password: user.password || initialUser.password,
    first_name: user.first_name || initialUser.first_name,
    last_name: user.last_name || initialUser.last_name,
  });
  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file.name);

      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the avatar as binary data (base64 format)
        setAvatar(reader.result as string);
      };
      setCon(false);
      EditMode(false);
      reader.readAsDataURL(file);
    }
  };

  const removeAvatar = () => {
    setFile(""); // Clear the filename
    setAvatar(null); // Clear the avatar
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input
    }
  };

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch();
    }
    setItemIdForUpdate(undefined);
  };

  const formatAvatarUrl = (url: string) => {
    return url.replace(/\\/g, "/"); // Replace backward slashes with forward slashes
  };

  // Example usage when setting the avatar state

  const blankImg = toAbsoluteUrl("media/svg/avatars/blank.svg");

  const formik = useFormik({
    initialValues: {
      ...user,
      avatar: user.avatar || initialUser.avatar,
      role: user.role || initialUser.role,
      first_name: user.first_name || initialUser.first_name,
      last_name: user.last_name || initialUser.last_name,
      email: user.email || initialUser.email,
      password: user.password || initialUser.password,
      id: user.id || initialUser.id,
    },
    validationSchema: editUserSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      const userData = new FormData();

      // Append fields from form values
      userData.append("first_name", values.first_name || "");
      userData.append("last_name", values.last_name || "");
      userData.append("email", values.email || "");
      userData.append("password", values.password || "");
      userData.append("role", values.role || "");

      // Handle avatar
      if (avatar) {
        let avatarFile: File | null = null;

        if (typeof avatar === "string" && avatar.startsWith("data:")) {
          const blob = dataURItoBlob(avatar); // Convert data URL to Blob
          avatarFile = new File([blob], "avatar.png", { type: blob.type }); // Create a File from Blob
        } else if (avatar instanceof File) {
          avatarFile = avatar; // Use the uploaded file
        }

        if (avatarFile) {
          const originalFileName = avatarFile.name || file || "avatar1.png"; // Use the file name or fallback
          userData.append("avatar", avatarFile, originalFileName);
        } else {
          console.warn("No valid avatar to append");
        }
      }

      try {
        console.log("User ID:", values); // Debug: Check the value of ID
        if (isNotEmpty(values.id)) {
          console.log("Updating user..."); // Debug log
          await updateUser(userData, values); // Cast to string
        } else {
          console.log("Creating new user..."); // Debug log
          await createUser(userData);
        }
      } catch (ex) {
        console.error("Error during form submission:", ex); // Detailed error log
      } finally {
        setSubmitting(false);
        cancel(true);
      }
    },
  });

  // Helper function to convert data URL to Blob
  const dataURItoBlob = (dataURI: string) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: mimeString });
  };
  useEffect(() => {
    setCon(true);
  }, []);
  if (userForEdit?.avatar && userForEdit.email) {
    EditMode(true);
    const afterUploads = userForEdit?.avatar
      .split("uploads\\")[1]
      .split("-")[0];
  }

  return (
    <>
      <form
        id="kt_modal_add_user_form"
        className="form"
        onSubmit={formik.handleSubmit}
        noValidate
      >
        {/* begin::Scroll */}
        <div
          className="d-flex flex-column scroll-y me-n7 pe-7"
          id="kt_modal_add_user_scroll"
          data-kt-scroll="true"
          data-kt-scroll-activate="{default: false, lg: true}"
          data-kt-scroll-max-height="auto"
          data-kt-scroll-dependencies="#kt_modal_add_user_header"
          data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
          data-kt-scroll-offset="300px"
        >
          {/* begin::Input group */}
          <div className="mb-7">
            <label className="d-block fw-bold fs-6 mb-5">Avatar</label>
            <div
              className="image-input image-input-outline"
              style={{
                backgroundImage: `url(${formatAvatarUrl(avatar || blankImg)})`,
              }}
            >
              <div
                className="image-input-wrapper w-125px h-125px"
                style={{
                  backgroundImage: `url(${
                    Con
                      ? formatAvatarUrl(avatar || blankImg)
                      : avatar || blankImg
                  })`,
                }}
              ></div>
              <input
                type="file"
                name="avatar"
                accept=".png, .jpg, .jpeg"
                onChange={handleAvatarChange}
                ref={fileInputRef} // Attach the ref to the input
                style={{ display: "none" }} // Hide the file input
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => fileInputRef.current?.click()} // Trigger file input
              >
                Select Image
              </button>
              <span
                className="btn btn-icon btn-circle btn-active-color-danger w-25px h-25px bg-body shadow"
                title="Remove avatar"
                onClick={removeAvatar}
              >
                <i className="bi bi-x fs-2"></i>
              </span>
            </div>
          </div>

          {/* end::Input group */}

          {/* begin::Input group */}
          <div className="fv-row mb-7">
            {/* begin::Label */}
            <label className="required fw-bold fs-6 mb-2">First Name</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder="First name"
              {...formik.getFieldProps("first_name")}
              type="text"
              name="first_name"
              className={clsx(
                "form-control form-control-solid mb-3 mb-lg-0",
                {
                  "is-invalid":
                    formik.touched.first_name && formik.errors.first_name,
                },
                {
                  "is-valid":
                    formik.touched.first_name && !formik.errors.first_name,
                }
              )}
              autoComplete="off"
              disabled={formik.isSubmitting || isUserLoading}
            />
            {formik.touched.first_name && formik.errors.first_name && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role="alert">{formik.errors.first_name}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>

          <div className="fv-row mb-7">
            {/* begin::Label */}
            <label className="required fw-bold fs-6 mb-2">Last Name</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder="Second name"
              {...formik.getFieldProps("last_name")}
              type="text"
              name="last_name"
              className={clsx(
                "form-control form-control-solid mb-3 mb-lg-0",
                {
                  "is-invalid":
                    formik.touched.last_name && formik.errors.last_name,
                },
                {
                  "is-valid":
                    formik.touched.last_name && !formik.errors.last_name,
                }
              )}
              autoComplete="off"
              disabled={formik.isSubmitting || isUserLoading}
            />
            {formik.touched.last_name && formik.errors.last_name && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role="alert">{formik.errors.last_name}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>

          {/* end::Input group */}

          {/* begin::Input group */}
          <div className="fv-row mb-7">
            {/* begin::Label */}
            <label className="required fw-bold fs-6 mb-2">Email</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder="Email"
              {...formik.getFieldProps("email")}
              className={clsx(
                "form-control form-control-solid mb-3 mb-lg-0",
                { "is-invalid": formik.touched.email && formik.errors.email },
                {
                  "is-valid": formik.touched.email && !formik.errors.email,
                }
              )}
              type="email"
              name="email"
              autoComplete="off"
              disabled={formik.isSubmitting || isUserLoading}
            />
            {/* end::Input */}
            {formik.touched.email && formik.errors.email && (
              <div className="fv-plugins-message-container">
                <span role="alert">{formik.errors.email}</span>
              </div>
            )}
          </div>
          {/* end::Input group */}
          <div className="fv-row mb-7">
            {/* begin::Label */}
            <label className="required fw-bold fs-6 mb-2">password</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder="password"
              {...formik.getFieldProps("password")}
              className={clsx(
                "form-control form-control-solid mb-3 mb-lg-0",
                {
                  "is-invalid":
                    formik.touched.password && formik.errors.password,
                },
                {
                  "is-valid":
                    formik.touched.password && !formik.errors.password,
                }
              )}
              type="text"
              name="password"
              autoComplete="off"
              disabled={formik.isSubmitting || isUserLoading}
            />
            {/* end::Input */}
            {formik.touched.password && formik.errors.password && (
              <div className="fv-plugins-message-container">
                <span role="alert">{formik.errors.password}</span>
              </div>
            )}
          </div>
          {/* begin::Input group */}
          <div className="mb-7">
            {/* begin::Label */}
            <label className="required fw-bold fs-6 mb-5">Role</label>
            {/* end::Label */}

            {/* begin::Roles */}
            {/* begin::Input row */}
            <div className="d-flex fv-row">
              {/* begin::Radio */}
              <div className="form-check form-check-custom form-check-solid">
                <input
                  className="form-check-input me-3"
                  {...formik.getFieldProps("role")}
                  name="role"
                  type="radio"
                  value="Supervisor Level"
                  id="kt_modal_update_role_option_0"
                  checked={formik.values.role === "Supervisor Level"}
                  disabled={formik.isSubmitting || isUserLoading}
                />
                <label
                  className="form-check-label"
                  htmlFor="kt_modal_update_role_option_0"
                >
                  <div className="fw-bolder text-gray-800">
                    Supervisor Level
                  </div>
                  <div className="text-gray-600">
                    Supervisors oversee the work of employees and ensure that
                    tasks and care plans are followed properly.
                  </div>
                </label>
              </div>
              {/* end::Radio */}
            </div>
            <div className="separator separator-dashed my-5"></div>

            {/* Program Manager Level */}
            <div className="d-flex fv-row">
              <div className="form-check form-check-custom form-check-solid">
                <input
                  className="form-check-input me-3"
                  {...formik.getFieldProps("role")}
                  name="role"
                  type="radio"
                  value="Program Manager Level"
                  id="kt_modal_update_role_option_1"
                  checked={formik.values.role === "Program Manager Level"}
                  disabled={formik.isSubmitting || isUserLoading}
                />
                <label
                  className="form-check-label"
                  htmlFor="kt_modal_update_role_option_1"
                >
                  <div className="fw-bolder text-gray-800">
                    Program Manager Level
                  </div>
                  <div className="text-gray-600">
                    Program Managers manage multiple Supervisors and have a
                    broader view of program-specific performance and compliance.
                  </div>
                </label>
              </div>
            </div>
            <div className="separator separator-dashed my-5"></div>

            {/* Regional Director Level */}
            <div className="d-flex fv-row">
              <div className="form-check form-check-custom form-check-solid">
                <input
                  className="form-check-input me-3"
                  {...formik.getFieldProps("role")}
                  name="role"
                  type="radio"
                  value="Regional Director Level"
                  id="kt_modal_update_role_option_2"
                  checked={formik.values.role === "Regional Director Level"}
                  disabled={formik.isSubmitting || isUserLoading}
                />
                <label
                  className="form-check-label"
                  htmlFor="kt_modal_update_role_option_2"
                >
                  <div className="fw-bolder text-gray-800">
                    Regional Director Level
                  </div>
                  <div className="text-gray-600">
                    Regional Directors oversee the entire operations within a
                    region and are responsible for strategic planning and
                    regional success.
                  </div>
                </label>
              </div>
            </div>
            <div className="separator separator-dashed my-5"></div>

            {/* Area Director Level */}
            <div className="d-flex fv-row">
              <div className="form-check form-check-custom form-check-solid">
                <input
                  className="form-check-input me-3"
                  {...formik.getFieldProps("role")}
                  name="role"
                  type="radio"
                  value="Area Director Level"
                  id="kt_modal_update_role_option_3"
                  checked={formik.values.role === "Area Director Level"}
                  disabled={formik.isSubmitting || isUserLoading}
                />
                <label
                  className="form-check-label"
                  htmlFor="kt_modal_update_role_option_3"
                >
                  <div className="fw-bolder text-gray-800">
                    Area Director Level
                  </div>
                  <div className="text-gray-600">
                    Area Directors are responsible for national oversight,
                    ensuring that the organization’s goals and standards are met
                    across all regions.
                  </div>
                </label>
              </div>
            </div>
            {/* end::Input row */}
            <div className="separator separator-dashed my-5"></div>
            {/* begin::Input row */}
            <div className="d-flex fv-row">
              {/* begin::Radio */}
              <div className="form-check form-check-custom form-check-solid">
                {/* begin::Input */}
                <input
                  className="form-check-input me-3"
                  {...formik.getFieldProps("role")}
                  name="role"
                  type="radio"
                  value="User Roles and Responsibilities"
                  id="kt_modal_update_role_option_4"
                  checked={
                    formik.values.role === "User Roles and Responsibilities"
                  }
                  disabled={formik.isSubmitting || isUserLoading}
                />
                {/* end::Input */}
                {/* begin::Label */}
                <label
                  className="form-check-label"
                  htmlFor="kt_modal_update_role_option_4"
                >
                  <div className="fw-bolder text-gray-800">
                    User Roles and Responsibilities Level
                  </div>
                  <div className="text-gray-600">
                    User Roles and Responsibilities work directly with program
                    participants, ensuring that program requirements are met and
                    providing support as needed.
                  </div>
                </label>
                {/* end::Label */}
              </div>
              {/* end::Radio */}
            </div>
            <div className="separator separator-dashed my-5"></div>
            <div className="d-flex fv-row">
              {/* begin::Radio */}
              <div className="form-check form-check-custom form-check-solid">
                {/* begin::Input */}
                <input
                  className="form-check-input me-3"
                  {...formik.getFieldProps("role")}
                  name="role"
                  type="radio"
                  value="HR Assistant"
                  id="kt_modal_update_role_option_5"
                  checked={formik.values.role === "HR Assistant"}
                  disabled={formik.isSubmitting || isUserLoading}
                />
                {/* end::Input */}
                {/* begin::Label */}
                <label
                  className="form-check-label"
                  htmlFor="kt_modal_update_role_option_5"
                >
                  <div className="fw-bolder text-gray-800">HR Assistant</div>
                  <div className="text-gray-600">
                    Facilitate the onboarding process, ensure all documents are
                    submitted.
                  </div>
                </label>
                {/* end::Label */}
              </div>
              {/* end::Radio */}
            </div>
            {/* end::Input row */}
            <div className="separator separator-dashed my-5"></div>
            <div className="d-flex fv-row">
              {/* begin::Radio */}
              <div className="form-check form-check-custom form-check-solid">
                {/* begin::Input */}
                <input
                  className="form-check-input me-3"
                  {...formik.getFieldProps("role")}
                  name="role"
                  type="radio"
                  value="HR Director"
                  id="kt_modal_update_role_option_6"
                  checked={formik.values.role === "HR Director"}
                  disabled={formik.isSubmitting || isUserLoading}
                />
                {/* end::Input */}
                {/* begin::Label */}
                <label
                  className="form-check-label"
                  htmlFor="kt_modal_update_role_option_6"
                >
                  <div className="fw-bolder text-gray-800">HR Director</div>
                  <div className="text-gray-600">
                    Develop and implement HR policies and strategies, ensure
                    compliance with regulations.
                  </div>
                </label>
                {/* end::Label */}
              </div>
              {/* end::Radio */}
            </div>
            <div className="separator separator-dashed my-5"></div>
            <div className="d-flex fv-row">
              {/* begin::Radio */}
              <div className="form-check form-check-custom form-check-solid">
                {/* begin::Input */}
                <input
                  className="form-check-input me-3"
                  {...formik.getFieldProps("role")}
                  name="role"
                  type="radio"
                  value="Finance Director"
                  id="kt_modal_update_role_option_7"
                  checked={formik.values.role === "Finance Director"}
                  disabled={formik.isSubmitting || isUserLoading}
                />
                {/* end::Input */}
                {/* begin::Label */}
                <label
                  className="form-check-label"
                  htmlFor="kt_modal_update_role_option_7"
                >
                  <div className="fw-bolder text-gray-800">
                    Finance Director
                  </div>
                  <div className="text-gray-600">
                    Oversee payroll processes, ensure accurate and timely
                    payments.
                  </div>
                </label>
                {/* end::Label */}
              </div>
              {/* end::Radio */}
            </div>
            <div className="separator separator-dashed my-5"></div>
            <div className="d-flex fv-row">
              {/* begin::Radio */}
              <div className="form-check form-check-custom form-check-solid">
                {/* begin::Input */}
                <input
                  className="form-check-input me-3"
                  {...formik.getFieldProps("role")}
                  name="role"
                  type="radio"
                  value="CEO Level"
                  id="kt_modal_update_role_option_8"
                  checked={formik.values.role === "CEO Level"}
                  disabled={formik.isSubmitting || isUserLoading}
                />
                {/* end::Input */}
                {/* begin::Label */}
                <label
                  className="form-check-label"
                  htmlFor="kt_modal_update_role_option_8"
                >
                  <div className="fw-bolder text-gray-800">CEO Level</div>
                  <div className="text-gray-600">
                    The CEO has a complete view of the company’s performance and
                    strategic direction.
                  </div>
                </label>
                {/* end::Label */}
              </div>
              {/* end::Radio */}
            </div>
          </div>
          {/* end::Input group */}
        </div>
        {/* end::Scroll */}

        {/* begin::Actions */}
        <div className="text-center pt-15">
          <button
            type="reset"
            onClick={() => cancel()}
            className="btn btn-light me-3"
            data-kt-users-modal-action="cancel"
            disabled={formik.isSubmitting || isUserLoading}
          >
            Discard
          </button>

          <button
            type="submit"
            className="btn btn-primary"
            data-kt-users-modal-action="submit"
            disabled={
              isUserLoading ||
              formik.isSubmitting ||
              !formik.isValid ||
              !formik.touched
            }
          >
            <span className="indicator-label">Submit</span>
            {(formik.isSubmitting || isUserLoading) && (
              <span className="indicator-progress">
                Please wait...{" "}
                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isUserLoading) && <UsersListLoading />}
    </>
  );
};

export { UserEditModalForm };
