import { Button } from "../button/Button";
import { Option } from "../option/Option";

const Question = ({ question }) => {
  const { que, options } = question;

  return (
    <div className="bg-[#FFFFFF] rounded-xl h-4/5 sm:h-auto p-4 md:w-[65ch] w-full">
      <div>
        <h1 className="font-semibold text-xl">{que}</h1>
      </div>

      <div className="flex flex-col gap-4 my-4">
        {options?.map(({ opt }) => (
          <Option option={opt} key={opt} />
        ))}
      </div>

      <div className="text-center">
        <Button>Next</Button>
      </div>
    </div>
  );
};

export { Question };
