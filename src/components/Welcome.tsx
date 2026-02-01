import Button from "../ui/Button/Button";

function Welcome() {
  function onOpenTarget() {
    window.open("https://archiveofourown.org/works", "_blank");
  }

  return (
    <div className="flex flex-col items-center justify-between w-[356px] bg-white p-4">
      <h1 className="text-xl">
        Welcome to <span className="text-primary font-semibold">Ao3</span>{" "}
        extension
      </h1>
      <h2 className="my-4 text-center text-base">
        Save your progression and kudos, return to last read fanfics and browse
        your history
      </h2>
      <Button
        title="Explore works"
        color="red"
        width="half"
        onClick={onOpenTarget}
      />
    </div>
  );
}

export default Welcome;
