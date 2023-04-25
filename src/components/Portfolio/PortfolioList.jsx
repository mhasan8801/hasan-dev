import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useEffect } from "react";

const getPortfolioList = gql`
    query QueryPortfolio {
        portfolio {
            id
            title
            description
            link_demo
            link_github
        }
    }
`

const PortfolioList = () => {

    const {data, loading, error} = useQuery(getPortfolioList)
    // set [listPortfolio, setListPortfolio] = useState([])

    useEffect((() => {
        console.log('loading ', loading) //cek fetch data masih berlangsung/selesai
        console.log('data gql : ', data) //cek fetch data yang diminta
        console.log('error : ', error) //cek jika ada error

        //mengecek proses fetch data
        // if(!loading && error !== undefined) {
        //     setListPortfolio(data.portfolio) //set data ke usestate
        // }

    }))

    return(
        <>
        
        </>
    )
}

export default PortfolioList;