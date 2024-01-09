import { useAppSelector } from "../../context/hooks";

export const PeriodicName = () => {
  const { firstName, lastName } = useAppSelector((state) => state.user);
  const { data } = useAppSelector((state) => state.periodicTable);

  console.log(firstName, lastName, data);

  const checkForElement = (text?: string) => {
    if (!text) return "";
    const elementOneChar = data?.find(
      (element) =>
        element.symbol.toLocaleLowerCase() ===
        text.toLocaleLowerCase().slice(0, 1)
    );

    const elementTwoChars = data?.find(
      (element) =>
        element.symbol.toLocaleLowerCase() ===
        text.toLocaleLowerCase().slice(0, 2)
    );

    if (elementOneChar || elementTwoChars) {
      return (
        <>
          <span className="relative p-[10px] inline-block mr-1 font-bold">
            {elementTwoChars?.symbol ?? elementOneChar?.symbol}{" "}
            <small className="absolute right-1 top-1 text-[10px]">
              {elementTwoChars?.number ?? elementOneChar?.number}
            </small>
          </span>
          {text.slice(elementTwoChars?.symbol.length ?? 1)}
        </>
      );
    }
    return text;
  };

  return (
    <div className="[&_span]:text-white [&_span]:bg-green-700">
      <h1 className="my-2">{checkForElement(firstName)}</h1>
      <h1 className="my-2 ml-8">{checkForElement(lastName)}</h1>
    </div>
  );
};
