import {Code} from "@nextui-org/code";
function StudentFirstLevel2Table({data}) {
    // Function to check if the cell contains any of the specified values
    const determineCellClass = (value) => {
        const highlightValues = ["راسب", "رل", "ض", "ض جـ","غـ"]; // Add more values as needed
        return value &&  highlightValues.some(highlightValue => value.includes(highlightValue)) ? "bg-red-500 text-white font-semibold" : "";
    };
    console.log(data);
    return ( 
    <div className="mt-12   sm:w-full md:w-full justify-center">
        {data?.hide == false ? 
        <div className="flex flex-wrap  justify-center w-full ">
        <table className="navbarHome lg:w-3/5 w-full sm:w-full md:w-4/5  m-4 rounded border-gray-50 border-2 border-solid ">
            <thead>
                <tr className="justify-center w-full">
                    <th className="w-full m-3 p-3 text-3xl underline underline-offset-4" colSpan="3">نتيجة الفرقة الثانية دور مايو عام 2023/2024</th>
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
                    <td className="w-1/5 sm:w-1/5 md:w-2/5 p-4 text-xl text-center border-gray-50 border-2 border-solid">الحالة   </td>
                    <td className="w-4/5 sm:w-4/5 md:w-3/5 p-4 text-xl border-gray-50 border-2 border-solid" >{data?.status}</td>
                </tr>
            </tbody>
            
        </table>
        {data?.secondSummation ? 
        // التقدير سنه تانية
        <table className="navbarHome lg:w-3/5 w-full sm:w-full md:w-4/5  m-4 rounded border-gray-50 border-2 border-solid ">
            <thead>
                <tr className="justify-center w-full">
                    <th className="w-full m-3 p-3 text-2xl underline underline-offset-4" colSpan="3">التقدير العام للطالب فرقة ثانية </th>
                </tr>
            </thead>
            
        
            <tbody>
                <tr>
                    <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid"> المجموع  </td> 
                    <td className={`border border-gray-300 px-4 py-2 text-center text-xl border-gray-50 border-2 border-solid`}>{data?.secondSummation}</td>
                </tr>
                <tr>
                    <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid"> النسبة المئوية  </td> 
                    <td className={`border border-gray-300 px-4 py-2 text-center text-xl border-gray-50 border-2 border-solid`}>{data?.secondPrecentage}</td>
                </tr>
                <tr>
                    <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid"> التقدير </td>
                    <td className={`border border-gray-300 px-4 py-2 text-center text-xl border-gray-50 border-2 border-solid`}>{data?.secondGrade}</td>
                </tr>
                <tr>
                    <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid"> ملاحظات  </td>
                    <td className={`border border-gray-300 px-4 py-2 text-center text-xl border-gray-50 border-2 border-solid `}>{data?.studentStatus}</td>
                </tr>
            </tbody>
        
        </table>
        :
        <table className="navbarHome lg:w-3/5 w-full sm:w-full md:w-4/5  m-4 rounded border-gray-50 border-2 border-solid ">
            <thead>
                <tr className="justify-center w-full">
                    <th className="w-full m-3 p-3 text-2xl underline underline-offset-4 " colSpan="3">التقدير العام للطالب سنه ثانية </th>
                </tr>
                <tr>
                    <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid"> الحالة  </td>
                    <td className={`border border-gray-300 px-4 py-2 text-center text-xl border-gray-50 border-2 border-solid bg-red-500 text-white font-bold`}>{data?.studentStatus}</td>
                </tr>
                
            </thead>
            
        
            <tbody>
                <tr>
                    <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid"> ملاحظات  </td>
                    <td className={`border border-gray-300 px-4 py-2 text-center text-xl border-gray-50 border-2 border-solid bg-red-500 text-white font-bold`}>{data?.studentStatus}</td>
                </tr>
            </tbody>
        
        </table>
        }
        { data?.totalSummation ? 
            <table className="navbarHome lg:w-3/5 w-full sm:w-full md:w-4/5  m-4 rounded border-gray-50 border-2 border-solid ">
                <thead>
                    <tr className="justify-center w-full">
                        <th className="w-full m-3 p-3 text-2xl underline underline-offset-4" colSpan="3">التقدير التراكمي للطالب </th>
                    </tr>
                </thead>
            
        
                <tbody>
                    <tr>
                        <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid">   مجموع الفرقة الاولي </td> 
                        <td className={`border border-gray-300 px-4 py-2 text-center text-xl border-gray-50 border-2 border-solid`}>{data?.firstSummation}</td>
                    </tr>
                    <tr>
                        <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid">  المجموع التراكمي </td> 
                        <td className={`border border-gray-300 px-4 py-2 text-center text-xl border-gray-50 border-2 border-solid`}>{data?.totalSummation}</td>
                    </tr>
                    <tr>
                        <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid">  النسبة المئوية الكلية </td> 
                        <td className={`border border-gray-300 px-4 py-2 text-center text-xl border-gray-50 border-2 border-solid`}>{data?.totalPrecentage}</td>
                    </tr>
                    <tr>
                        <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid">   التقدير التراكمي  </td>
                        <td className={`border border-gray-300 px-4 py-2 text-center text-xl border-gray-50 border-2 border-solid`}>{data?.totalGrade}</td>
                    </tr>
                </tbody>
        
            </table>
        :""}
        
        
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
                    <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid">Summar Training </td>
                    
                    <td className={`border border-gray-300 px-4 py-2 text-center text-xl ${determineCellClass(data?.summarTrainging)}`}>{data?.summarTrainging}</td>
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
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Linux Essentials  </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.linuxEssential_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.linuxEssential_Grade)}`} >{data?.linuxEssential_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Programming Essential in C++   </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.programmingC_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.programmingC_Grade)}`} >{data?.programmingC_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Web Programming I </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.webProgramming1_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.webProgramming1_Grade)}`} >{data?.webProgramming1_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">introudction to DB </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.introDB_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.introDB_Grade)}`} >{data?.introDB_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Digital Engineering  </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.digital_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.digital_Grade)}`} >{data?.digital_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Operating System  </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.oS_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.oS_Grade)}`} >{data?.oS_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Web Programming II </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.webProgramming2_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.webProgramming2_Grade)}`} >{data?.webProgramming2_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Database Programming</td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.databaseProgramming_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.databaseProgramming_Grade)}`} >{data?.databaseProgramming_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">CCNA R&SI  </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.ccnA_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.ccnA_Grade)}`} >{data?.ccnA_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Data Structure  </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.dataStructure_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.dataStructure_Grade)}`} >{data?.dataStructure_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Java Progrmming I  </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.java_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.java_Grade)}`} >{data?.java_Grade} </td>
                </tr>
                <tr>
                    <td className="w-4/10 sm:w-5/10 md:w-2/5 m-3 p-1 text-xl text-center border-gray-50 border-2 border-solid">Capstone Design  </td>
                    <td className="w-4/10  sm:w-2/10 m-3 p-2 text-xl border-gray-50 border-2 border-solid text-center " >{data?.capstone_Score} </td>
                    <td className={`w-2/10 sm:w-2/10 m-3 p-2 p-1 text-xl border-gray-50 border-2 border-solid text-center  ${determineCellClass(data?.capstone_Grade)}`} >{data?.capstone_Grade} </td>
                </tr>
                
                </tbody>

            </table>
        {data?.subject1Name || data?.subject2Name ?  
            <table className="navbarHome lg:w-3/5 w-full sm:w-full md:w-4/5  m-4 rounded border-gray-50 border-2 border-solid ">
                <thead>
                    <tr className="justify-center w-full">
                        <th className="w-full m-3 p-3 text-2xl underline underline-offset-4" colSpan="3">تخلفات الفرقة الاولي </th>
                    </tr>
                    <tr className="justify-center w-full">
                        <th className="w-full m-3 p-2 text-2xl  border-gray-50 border-2 border-solid" > المادة </th>
                        <th className="w-full m-3 p-2 text-2xl  border-gray-50 border-2 border-solid" > الدرجة الكلية </th>
                        <th className="w-full m-3 p-2 text-2xl  border-gray-50 border-2 border-solid" >المجموع  </th>
                        <th className="w-full m-3 p-2 text-2xl  border-gray-50 border-2 border-solid" > التقدير </th>
                    </tr>
                </thead>
                
                
                <tbody>
                    {data?.subject1Name ? 
                    <tr>
                        <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid">{data?.subject1Name} </td>
                        <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid"> {data?.subject1Total} </td>
                        <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid"> {data?.subject1_Score} </td>
                        <td className={`border border-gray-300 px-4 py-2 text-center text-xl ${determineCellClass(data?.subject1_Grade)}`}>{data?.subject1_Grade}</td>
                    </tr>
                    : ""}
                    {data?.subject2Name ? 
                    <tr>
                        
                        <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid">{data?.subject2Name} </td>
                        <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid"> {data?.subject2Total} </td>
                        <td className=" w-1/5 sm:w-2/5 md:w-2/5 p-2 text-xl text-center border-gray-50 border-2 border-solid"> {data?.subject2_Score} </td>
                        <td className={`border border-gray-300 px-4 py-2 text-center text-xl ${determineCellClass(data?.subject2_Grade)}`}>{data?.subject2_Grade}</td>
                    </tr>
                    : ""}

                </tbody>
            
            </table>
        :
        ""}
        </div> : 
        <Code color="danger" className="w-4/5 text-3xl text-center mb-8 m-8" size="lg" > لقد تم حجب النتيجة لعدم سداد المصروفات </Code>
        }
</div> );
}

export default StudentFirstLevel2Table;