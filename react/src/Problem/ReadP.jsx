import { useEffect,useState } from "react";

export const ReadP = () => {
    const [data, setData] = useState([])
    
    const fetchData = async () => {
        const data = await JSON.parse(localStorage.getItem("studentData")) || [];
        setData(data);
    }
    useEffect(()=>{
        fetchData();
    },[]);
    // console.log(data[0].courses);
return(<>
    <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Pass</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {data.map((value,index)=>(
            <tr key={value.id}>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>"we;cp"</td>
                <td>{value.pass == true ? "Yes" :"No"}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        ))}
        </tbody>
    </table>
    </>)
}

export default ReadP;