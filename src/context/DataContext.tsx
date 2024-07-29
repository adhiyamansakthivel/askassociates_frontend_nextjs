'use client'; 
import React from "react";
import APIEndPoints from "../utils/APIEndPoints";
import { useAPIGet } from "../services/APIService";

type DataContextType = {
    businessContants: any | null;
    whatsappUs: any | null;
};

export const DataContext = React.createContext< DataContextType>({
  businessContants: "",
  whatsappUs: "",
});



export const DataProvider = ({ children }: {children:any}) => {
  const [businessContants, setBusinessContants] = React.useState<any | null>("");
  const [whatsappUs, setWhatsappUs] = React.useState<any | null>("");

  const apiBusinessDet = useAPIGet(
    "businessDetails",
    "businessDetails",
    `${APIEndPoints.GetBusiness.url}`,
    {
      enabled: !!APIEndPoints?.GetBusiness?.url,
      refetchOnWindowFocus: false,
      staleTime: 0,
    }
  );



  React.useEffect(() => {


    if (!apiBusinessDet.isError && apiBusinessDet.isSuccess) {
      const ourBusinessList:any = apiBusinessDet?.data?.data?.data
      const ourWhatsapp:any = {
        whatsappUrl: `https://wa.me/+91${apiBusinessDet?.data?.data?.data?.whatsapp}/?text=Hi, Ask Associates! %0a`,
        whatsappnumber: apiBusinessDet?.data?.data?.data?.whatsapp,
      };
    
      
      setBusinessContants(ourBusinessList);
      setWhatsappUs(ourWhatsapp);
    }
  }, [apiBusinessDet.isSuccess])

  



  return (
    <DataContext.Provider
      value={{
        
        businessContants,
        whatsappUs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
