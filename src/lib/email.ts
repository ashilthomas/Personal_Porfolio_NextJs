import * as yup from "yup";

interface IForm {
  name: string;
  age: number;
  message: File;
}

 const validationSchema: Yup.SchemaOf<IForm> = Yup.object().shape({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    profileImgFile: Yup.mixed().required("Required")
  });

 const { register, handleSubmit } = useForm<FormValues>()


  const onSubmit: SubmitHandler<FormValues> = (data) => {

      const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  if (res.ok) {
    setMessage("✅ Email sent successfully!");
  } else {
    setMessage("❌ Something went wrong.");
  }



  }



  export {onSubmit,handleSubmit,userSchema,register}



