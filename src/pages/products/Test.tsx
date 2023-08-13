import React, { useEffect, useState, useCallback  } from "react";
import { productsService } from '../../services/api';

const Test = () => {

    const [tableData, setTableData] = useState<any>({
        headers: ["title", "description", "actions"],
        rows: [],
        loading: false
      });

      const fetchData = useCallback(async () => {
          try {
            const response = await productsService.get();
            if(response){
              setTableData({
                ...tableData,
                rows: response.products,
                loading: false
              });
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
    }, [])
      
    useEffect(() => {
        fetchData()
      }, []);
    
    return (
        <div>
            {JSON.stringify(tableData)}
        </div>
    );
}

export default Test;