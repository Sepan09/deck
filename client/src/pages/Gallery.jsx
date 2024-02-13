import Page from "../components/Page";
import JobCard from "../components/JobCard";
import { Box } from "@mui/material";
import { useQuery } from "@apollo/client";
import { FIND_JOBS } from "../graphql/queries";

const headContent = (
  <>
    <title>Gallery</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

export default function Gallery() {
  const { loading, data } = useQuery(FIND_JOBS);

  console.log(data);

  return (
    <Page isProtected={true} headContent={headContent}>
      <div>Gallery Page</div>
      <Box>
        {data ? (
          data.findAllJobs.map((job) => <JobCard key={job._id} jobData={job} />)
        ) : (
          <div>loading</div>
        )}
      </Box>
    </Page>
  );
}
