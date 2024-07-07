"use client"
import {Spinner} from "@nextui-org/spinner";
import { useQuery } from '@tanstack/react-query';
import {Code} from "@nextui-org/code";
import {Button,Link} from "@nextui-org/react";

import { useData } from "@/app/Components/DataProviderComponent";
import axios from "axios";
import StudentFirstLevel2Table from "@/app/Components/StudentLevel2TableComponent";
const fetchStudents = async ({queryKey}) => {
    const [_, StudentName, IDCode] = queryKey;
    const API_URL_Natega = process.env.API_URL_Natega;
    console.log(process.env)
    console.log(API_URL_Natega);
    try{
        const response = await axios.get(`${API_URL_Natega}/second-year/natega`,{
            params:{
                StudentName,
                IDCode
            }
        });
        console.log(response.data)
        return response.data;

    }catch(error){

    }

    
};
function ShowResult() {
    const { UrlData} = useData();
    console.log(UrlData)

    const { data, error, isLoading } = useQuery( {
        queryKey:['students',UrlData?.StudentName, UrlData?.IDCode],
        queryFn:fetchStudents

    } );
    console.log(data);
    return ( 
        <div className="w-full flex justify-center">
            {isLoading ? <Spinner label="Loading..." className="flex h-screen justify-center items-center text-3xl mb-8" size="lg"  color="warning" />: ''}
            {error ? <div className="flex flex-col justify-center items-center w-full"><Code color="danger" className="w-4/5 text-3xl text-center mb-8 m-8" size="lg" > ! لا يوجد اي نتائج </Code>
            <Button href="http://localhost:3000/secondIT" as={Link} size="lg" className="flex justify-center max-w-32"> Back </Button></div> : "" }
            {data? <StudentFirstLevel2Table data={data}></StudentFirstLevel2Table>: ""}
            
        </div>
     );
}

export default ShowResult;