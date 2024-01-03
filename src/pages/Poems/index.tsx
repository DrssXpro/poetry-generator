import PPoemsCard from "@/components/PPoemsCard";

const Poems = () => {
  return (
    <div className="flex flex-col gap-5 w-full overflow-auto Container" style={{ height: "calc(100vh - 80px)" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <PPoemsCard key={i}></PPoemsCard>
      ))}
    </div>
  );
};

export default Poems;
