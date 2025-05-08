import { Outlet, useNavigation } from "react-router-dom";
import Loading from "../component/global/Loading";
import Navbar from "../component/navbar/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <main>
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <section className="max-w-[1415px] mx-auto  px-6 xl:px-4 ">
          <Outlet />
        </section>
      )}
    </main>
  );
};

export default HomeLayout;
