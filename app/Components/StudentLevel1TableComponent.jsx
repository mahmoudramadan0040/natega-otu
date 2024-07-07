import {Code} from "@nextui-org/code";
function StudentFirstLevelTable({data}) {
    // Function to check if the cell contains any of the specified values
    const determineCellClass = (value) => {
        const highlightValues = ["راسب", "رل", "ض", "ض جـ","غـ"]; // Add more values as needed
        return value && highlightValues.some(highlightValue => value.includes(highlightValue)) ? "bg-red-500 text-white font-semibold" : "";
    };
    console.log(data);
    return ( 
    <div className="mt-12   sm:w-full md:w-full justify-center">
        {data?.hide == false ? 
        <div className="flex flex-wrap  justify-center w-full ">
        <table className="navbarHome lg:w-3/5 w-full sm:w-full md:w-4/5  m-4 rounded border-gray-50 border-2 border-solid ">
            <thead>
                <tr className="justify-center w-full">
                    <th className="w-full m-3 p-3 text-3xl underline underline-offset-4" colSpan="3">نتيجة الفرقة الاولي دور مايو عام 2023/2024</th>
                </tr>
            </thead>
            <tbody>
                <tr className="justify-center w-full">
                    <td  className="w-full p-4 text-2xl text-bold underline underline-offset-4 border-gray-50 border-2 border-solid" colSpan="4" >بيانات الطالب</td>
                </tr>
                {/* بيانات الطالب */}
                <tr>
                    <td className="w-1/5 sm:w-1/5 md:w-2/5 p-4 text-xl text-center border-gray-50 border-2 border-solid">الاسم</td>
                    <td className="w-4/5 sm:w-4/5 md:w-3/5 p-4 text-xl border-gray-50 border-2 border-solid" >{data?.studentName} </td>
                </tr>
                <tr>
                    <td className="w-1/5 sm:w-1/5 md:w-2/5 p-4 text-xl text-center border-gray-50 border-2 border-solid">رقم ID </td>
                    <td className="w-4/5 sm:w-4/5 md:w-3/5 p-4 text-xl border-gray-50 border-2 border-solid " >{data?.idCode} </td>
                </tr>
                <tr>
                    <td className="w-1/5 sm:w-1/5 md:w-2/5 p-4 text-xl text-center border-gray-50 border-2 border-solid">رقم الجلوس </td>
                    <td className="w-4/5 sm:w-4/5 md:w-3/5 p-4 text-xl border-gray-50 border-2 border-solid" >{data?.classCode}</td>
                </tr>
                <tr>
                    <td className="w-1/5 sm:w-1/5 md:w-2/5 p-4 text-xl text-center border-gray-50 border-2 border-solid">الحالة   </td>
                    <td className="w-4/5 sm:w-4/5 md:w-3/5 p-4 text-xl border-gray-50 border-2 border-solid" >{data?.status}</td>
                </tr>
            </tbody>
            
        </table>
        {data?.summation ? 
        <table className="navbarHome lg:w-3/5 w-full sm:w-full md:w-4/5  m-4 rounded border-gray-50 border-2 border-solid ">
            <thead>
                <tr className="justify-center w-full">
                    <th className="w-full m-3 p-3 text-2xl underline underline-offset-4" colSpan="3">التقدير العام للطالب سنه اولي </th>
                </tr>
                <tr className="justify-center w-full">
                    <th className="w-full m-3 p-2 text-2xl  border-gray-50 border-2 border-solid" > المادة </th>
                    <th className="w-full m-3 p-2 text-2xl  border-gray-50 border-2 border-solid" > التقدير </th>
                </tr>
            </thead>
            
        
            <tbody>
                <tr>
                    <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid"> المجموع  </td> 
                    <td className={`border border-gray-300 px-4 py-2 text-center text-xl`}>{data?.summation}</td>
                </tr>
                <tr>
                    <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid"> النسبة المئوية  </td> 
                    <td className={`border border-gray-300 px-4 py-2 text-center text-xl `}>{data?.precentage}</td>
                </tr>
                <tr>
                    <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid"> التقدير </td>
                    <td className={`border border-gray-300 px-4 py-2 text-center text-xl `}>{data?.totalGrade}</td>
                </tr>
                <tr>
                    <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid"> ملاحظات  </td>
                    <td className={`border border-gray-300 px-4 py-2 text-center text-xl `}>{data?.statusNote}</td>
                </tr>
            </tbody>
        
        </table>
        :
        <table className="navbarHome lg:w-3/5 w-full sm:w-full md:w-4/5  m-4 rounded border-gray-50 border-2 border-solid ">
            <thead>
                <tr className="justify-center w-full">
                    <th className="w-full m-3 p-3 text-2xl underline underline-offset-4 " colSpan="3">التقدير العام للطالب سنه اولي </th>
                </tr>
                
            </thead>
            
        
            <tbody>
                <tr>
                    <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid"> ملاحظات  </td>
                    <td className={`border border-gray-300 px-4 py-2 text-center text-xl border-gray-50 border-2 border-solid bg-red-500 text-white font-bold`}>{data?.statusNote}</td>
                </tr>
            </tbody>
        
        </table>
        }
        
        
        <table className="navbarHome lg:w-3/5 w-full sm:w-full md:w-4/5  m-4 rounded border-gray-50 border-2 border-solid ">
            <thead>
                <tr className="justify-center w-full">
                    <th className="w-full m-3 p-3 text-2xl underline underline-offset-4" colSpan="3">مواد لا تضاف للمـجـمـوع  </th>
                </tr>
                <tr className="justify-center w-full">
                    <th className="w-full m-3 p-2 text-2xl  border-gray-50 border-2 border-solid" > المادة </th>
                    <th className="w-full m-3 p-2 text-2xl  border-gray-50 border-2 border-solid" > التقدير </th>
                </tr>
            </thead>
            
            
            <tbody>
                <tr>
                    <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid">IT Essentials </td>
                    
                    <td className={`border border-gray-300 px-4 py-2 text-center text-xl ${determineCellClass(data?.itEssential)}`}>{data?.itEssential}</td>
                </tr>
                <tr>
                    <td className="w-1/5 lg:w-2/5 sm:w-1/5 md:w-2/5 p-2 text-xl  text-center border-gray-50 border-2 border-solid">Technical English I  </td>
                    <td className={`border border-gray-300 px-4 py-2 text-center text-xl ${determineCellClass(data?.technicalEnglish1)}`}>{data?.technicalEnglish1}</td>
                </tr>
                <tr>
                    <td className="w-1/5 lg:w-2/5 sm:w-1/5 md:w-2/5 p-2 text-xl  text-center border-gray-50 border-2 border-solid">Field Training  </td>
                    <td className={`border border-gray-300 px-4 py-2 text-center text-xl ${determineCellClass(data?.fieldTraining_Grade)}`}>{data?.fieldTraining_Grade}</td>
                </tr>
            </tbody>
            
        </table>


        <table className="navbarHome lg:w-3/5 w-full sm:w-full md:w-4/5  m-4 rounded border-gray-50 border-2 border-solid ">
            <thead>
                <tr className="justify-center w-full">
                    <th className="w-full m-3 p-3 text-2xl underline underline-offset-4" colSpan="3">مواد تضاف للمـجـمـوع  </th>
                </tr>
                <tr className="justify-center w-full">
                    <th className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-2 text-2xl  border-gray-50 border-2 border-solid" > المادة </th>
                    <th className="w-4/10  sm:w-2/10 m-3 p-2 text-2xl  border-gray-50 border-2 border-solid" > المجموع </th>
                    <th className="w-2/10 sm:w-2/10 m-3 p-2 text-2xl  border-gray-50 border-2 border-solid" > التقدير </th>
                </tr>
            </thead>
            
            
            <tbody>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Intro To cyber security  </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.cyber1_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.cyber1_Grade)}`} >{data?.cyber1_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Mathematics I  </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.math1_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.math1_Grade)}`} >{data?.math1_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Physics </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.physicsScore} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.physicsGrade)}`} >{data?.physicsGrade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Programming Essential in Python </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.introPython_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.introPython_Grade)}`} >{data?.introPython_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Programming Essential in C  </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.introToC_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.introToC_Grade)}`} >{data?.introToC_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Cyber Security Essentials  </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.cyber2_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.cyber2_Grade)}`} >{data?.cyber2_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Into to IOT & in connecting things </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.introToIOT_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.introToIOT_Grade)}`} >{data?.introToIOT_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Ms Office  </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.msOffice_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.msOffice_Grade)}`} >{data?.msOffice_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Technical English II  </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.technicalEnglish2_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.technicalEnglish2_Grade)}`} >{data?.technicalEnglish2_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Mathematics II  </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.math2_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.math2_Grade)}`} >{data?.math2_Grade} </td>
                </tr>
                </tbody>

            </table>
        </div> : 
        <Code color="danger" className="w-4/5 text-3xl text-center mb-8 m-8" size="lg" > لقد تم حجب النتيجة لعدم سداد المصروفات </Code>}
</div> );
}

export default StudentFirstLevelTable;