// serverPage.tsx
import { GetServerSideProps } from 'next';
import APIEndPoints from "@/utils/APIEndPoints";
import getAPIData from "@/services/APIService";

type ServerPageProps = {
  apiProductDetails: any; // Adjust the type as needed
  apiRelatedProductsList: any; // Adjust the type as needed
};

const ServerPage: React.FC<ServerPageProps> = ({ apiProductDetails, apiRelatedProductsList }) => {
  // Your component logic here
  return (
    <div>
      {/* Render your data */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ServerPageProps> = async ({ query }) => {
  try {
    const productDetails = await getAPIData(
      'get',
      `${APIEndPoints.GetAllProducts.url}`
    );
    const relatedProductsList = await getAPIData(
      'get',
      `${APIEndPoints.GetRelatedProducts.url}`
    );

    return {
      props: {
        apiProductDetails: productDetails?.data,
        apiRelatedProductsList: relatedProductsList?.data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        apiProductDetails: null,
        apiRelatedProductsList: null,
      },
    };
  }
};

export default ServerPage;
