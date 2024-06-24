import React, { useState, useEffect } from "react";
import { signIn, useSession, getSession } from "next-auth/react";
import Admin from "layouts/Admin.js";
import FertilizerShop from "components/FertilizerShop";

export default function Shop() {
  const { data: session, status } = useSession();
  console.log(session);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = () => {
      if (status === "unauthenticated") {
        //signIn();
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    securePage();
  });

  if (loading) {
    return <h2 style={{ marginTop: 100, textAlign: "center" }}>LOADING...</h2>;
  }
  return (
    <Admin
      title="Fertilizer Shops Locator"
      headerText="Enter town name to find fertilizer shops near you"
      //image={session.user.image}
      image = "https://media.licdn.com/dms/image/D4D03AQGkPd66JuEbkA/profile-displayphoto-shrink_100_100/0/1682574046288?e=1701302400&v=beta&t=XtGEcI7EP9PSLPOl4xNp_1dOKevA-W8om5sfOOEX8ps"
    >
      <div className="flex flex-wrap mt-4 justify-center">
        <div className="w-full mb-12 xl:mb-0 px-4">
          <FertilizerShop />
        </div>
      </div>
    </Admin>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let userId = null;

  return {
    props: {
      session,
      userId,
    },
  };
}
