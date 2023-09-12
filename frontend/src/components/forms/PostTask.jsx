import { useFormik } from 'formik';
import * as Yup from 'yup';
import './forms.css'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
 


const PostTask = () => {

   const { mutate  } = useMutation({
     mutationFn : async (data) => {
       await axios.post('/api/v1/task/new' , data)
     },
     onSuccess: () => {
      toast.success("task posted sucessfully")
     }, 
     onError : (error) => {
       toast.error(` status ${error?.request.status}    ${error?.response?.data?.error} `|| "task can not be posted sucessfully")
       console.log(error?.response?.data?.error);

     }

   })





  const formik = useFormik({
    initialValues: {
      titile: "",
      description: ""
    },

      validationSchema: Yup.object({
          titile: Yup.string().required('Required'),
          description: Yup.string().required('Required'),
      }),

      
    onSubmit:async ( values , {resetForm} )=> {
      console.log(values);
      mutate(values)
      resetForm()
    },
    
  });
  return (
    <form  className='From_container'  onSubmit={formik.handleSubmit}>

    {/* add task  */}

      <label className='bd' htmlFor="title">Task</label>
      <input
        name="titile"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.titile}
      />
      {formik.touched.titile && formik.errors.titile ? (
        <div>{formik.errors.titile}</div>
      ) : null}

   
   {/* task decription  */}
   
      <label htmlFor="description"> description</label>
      <textarea 
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
        >
        </textarea>
      
      {formik.touched.description && formik.errors.description ? (
        <div>{formik.errors.description}</div>
      ) : null}



      <button type="submit" >Submit</button>
    </form> 
  );
};



export default PostTask  