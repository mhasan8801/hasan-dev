import { gql, useQuery } from "@apollo/client";
import Paragraph from "../../../elements/Paragraph";
import TextColor from "../../../elements/TextColor";
import Title from "../../../elements/Title";

const CountPortofolio = gql`
query CountPortfolio {
    portfolio_aggregate {
      aggregate {
        count(columns: id)
      }
    }
  }
`

const CountBlog = gql`
query CountBlog {
    blog_aggregate {
      aggregate {
        count(columns: id)
      }
    }
  }
`

const Dashboard = () => {

    const { data: portfolioData, loading: portfolioLoading } = useQuery(CountPortofolio);
    const { data: blogData, loading: blogLoading } = useQuery(CountBlog);

    if (portfolioLoading || blogLoading) {
        return <p>Loading...</p>;
    }

    const portfolioCount = portfolioData?.portfolio_aggregate?.aggregate?.count || 0;
    const blogCount = blogData?.blog_aggregate?.aggregate?.count || 0;

    return (
        <div className="dashboard">
            <div className="container-fluid">
                <div className="row g-3 my-1">
                    <div className="col-md-2">
                        <div className="my-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
                            <div className="content text-center">
                                <TextColor $h3>{portfolioCount}</TextColor>
                                <Title $h3>Portofolio</Title>
                            </div>
                        </div>
                        <div className="my-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
                            <div className="content text-center">
                                <TextColor $h3>{blogCount}</TextColor>
                                <Title $h3>Blog</Title>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;