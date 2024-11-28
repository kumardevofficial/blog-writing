import { useEffect, useState } from "react";
import Articlebox from "./ArticleBox/ArticleBox";
import axios from "axios";

const HomePage = () => {
  const [initialPost, setPost] = useState([]);
  const URL = "http://localhost:3000/";
  const allpost = async () => {
    try {
      const response = await axios.get(URL);
      setPost(response.data);
    } catch (err) {
      console.log("unable to get the data ", err);
    }
  };

  useEffect(() => {
    allpost();
  }, []);
  // const article = [
  //   {
  //     articleTitle: `AAP launches outreach campaign to directly connect with Delhi voters`,
  //     fullarticle: `The Aam Aadmi Party (AAP) on Sunday kicked off the 'Aapka Vidhayak, Aapke Dwar' campaign to highlight the work done in the past five years under Chief Minister Arvind Kejriwal's leadership.
  //     With Delhi Assembly elections on the horizon, the AAP has launched an outreach campaign aiming to directly connect with voters across all 2,800 zones within a month.`,
  //     imageUrl:
  //       "https://upload.wikimedia.org/wikipedia/commons/8/88/Aam_Aadmi_Party_%28AAP%29_Logo_New.png",
  //     category: "politics",
  //   },
  //   {
  //     articleTitle: `AAP launches outreach campaign to directly connect with Delhi voters`,
  //     fullarticle: `The Aam Aadmi Party (AAP) on Sunday kicked off the 'Aapka Vidhayak, Aapke Dwar' campaign to highlight the work done in the past five years under Chief Minister Arvind Kejriwal's leadership.
  //     With Delhi Assembly elections on the horizon, the AAP has launched an outreach campaign aiming to directly connect with voters across all 2,800 zones within a month.`,
  //     imageUrl:
  //       "https://upload.wikimedia.org/wikipedia/commons/8/88/Aam_Aadmi_Party_%28AAP%29_Logo_New.png",
  //     category: "politics",
  //   },
  //   {
  //     articleTitle: `AAP launches outreach campaign to directly connect with Delhi voters`,
  //     fullarticle: `The Aam Aadmi Party (AAP) on Sunday kicked off the 'Aapka Vidhayak, Aapke Dwar' campaign to highlight the work done in the past five years under Chief Minister Arvind Kejriwal's leadership.
  //     With Delhi Assembly elections on the horizon, the AAP has launched an outreach campaign aiming to directly connect with voters across all 2,800 zones within a month.`,
  //     imageUrl:
  //       "https://upload.wikimedia.org/wikipedia/commons/8/88/Aam_Aadmi_Party_%28AAP%29_Logo_New.png",
  //     category: "politics",
  //   },
  //   {
  //     articleTitle: `AAP launches outreach campaign to directly connect with Delhi voters`,
  //     fullarticle: `The Aam Aadmi Party (AAP) on Sunday kicked off the 'Aapka Vidhayak, Aapke Dwar' campaign to highlight the work done in the past five years under Chief Minister Arvind Kejriwal's leadership.
  //     With Delhi Assembly elections on the horizon, the AAP has launched an outreach campaign aiming to directly connect with voters across all 2,800 zones within a month.`,
  //     imageUrl:
  //       "https://upload.wikimedia.org/wikipedia/commons/8/88/Aam_Aadmi_Party_%28AAP%29_Logo_New.png",
  //     category: "politics",
  //   },
  //   {
  //     articleTitle: `AAP launches outreach campaign to directly connect with Delhi voters`,
  //     fullarticle: `The Aam Aadmi Party (AAP) on Sunday kicked off the 'Aapka Vidhayak, Aapke Dwar' campaign to highlight the work done in the past five years under Chief Minister Arvind Kejriwal's leadership.
  //     With Delhi Assembly elections on the horizon, the AAP has launched an outreach campaign aiming to directly connect with voters across all 2,800 zones within a month.`,
  //     imageUrl:
  //       "https://upload.wikimedia.org/wikipedia/commons/8/88/Aam_Aadmi_Party_%28AAP%29_Logo_New.png",
  //     category: "politics",
  //   },
  //   {
  //     articleTitle: `AAP launches outreach campaign to directly connect with Delhi voters`,
  //     fullarticle: `The Aam Aadmi Party (AAP) on Sunday kicked off the 'Aapka Vidhayak, Aapke Dwar' campaign to highlight the work done in the past five years under Chief Minister Arvind Kejriwal's leadership.
  //     With Delhi Assembly elections on the horizon, the AAP has launched an outreach campaign aiming to directly connect with voters across all 2,800 zones within a month.`,
  //     imageUrl:
  //       "https://upload.wikimedia.org/wikipedia/commons/8/88/Aam_Aadmi_Party_%28AAP%29_Logo_New.png",
  //     category: "politics",
  //   },
  // ];

  return (
    <>
      {initialPost.map((data, index) => (
        <Articlebox key={index} data={data} />
      ))}
    </>
  );
};

export default HomePage;
