"use client"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Button} from "@nextui-org/button"
import { useRouter   } from 'next/navigation';
import { useData } from './DataProviderComponent';
function StudentLevelForm() {
    const router = useRouter();
    const { UrlData, setUrlData} = useData();
    const formik = useFormik({
        initialValues: {
          studentName: '',
          studentId: '',
        },
        validationSchema: Yup.object({
          studentName: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
          studentId: Yup.string()
          .matches(/^\d{2}\/\d{6}$/, 'Invalid format. Use XX/YYYYMM like that example 23/121100')
          .required('Required'),
        }),
        onSubmit: (values) => {
          setUrlData({
            StudentName:values.studentName,
            IDCode:values.studentId
          })
          console.log(UrlData)
          router.push(`firstIT/index`);
          
        },
    });


    return ( 
<form onSubmit={formik.handleSubmit} className="lg:w-1/2 sm:w-4/5 md:w-3/5 w-4/5 mx-auto p-8 navbarHome mt-12 ">
      <div className="mb-4 ">
        <label
          htmlFor="studentName"
          className="block text-bold  font-bold mb-2 text-lg"
        >
          Student Name
        </label>
        <input
          id="studentName"
          name="studentName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.studentName}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-50 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.touched.studentName && formik.errors.studentName ? (
          <p className="text-red-500 text-lg italic mt-2">
            {formik.errors.studentName}
          </p>
        ) : null}
      </div>
      <div className="mb-4">
        <label
          htmlFor="studentId"
          className="block text-bold  font-bold mb-2 text-lg"
        >
          Student ID
        </label>
        <input
          id="studentId"
          name="studentId"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.studentId}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-50 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.touched.studentId && formik.errors.studentId ? (
          <p className="text-red-500 text-lg italic mt-2">
            {formik.errors.studentId}
          </p>
        ) : null}
      </div>
      <div className="flex items-center justify-center">
        <Button type="submit" color="primary" variant="bordred"  className='w-2/5  bg-neutral-900 hover:bg-zinc-950 text-2xl font-mono font-black'>
            Submit
        </Button>  
      </div>
    </form>
     );
}

export default StudentLevelForm;