import PCard from "@/components/PCard";

const Home = () => {
  return (
    <div
      className="flex flex-col gap-5 items-center w-full overflow-auto Container"
      style={{ height: "calc(100vh - 70px)" }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <PCard key={i}></PCard>
      ))}
    </div>
  );
};

export default Home;
