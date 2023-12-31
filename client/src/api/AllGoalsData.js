import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const AllGoalsData = () => {

const axiosPublic = useAxiosPublic();

const {data:allGoals=[], refetch }= useQuery({
    queryKey: ['allGoals'],
    queryFn: async()=>{
        const res = await axiosPublic.get('/all');
        return res.data.result;
    }
})

    return {allGoals, refetch}
};

export default AllGoalsData;