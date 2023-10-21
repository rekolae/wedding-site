export default function ToggleButton({
  text,
  id,
  checked
}: {
  text: string;
  id: string;
  checked: boolean;
}) {
  return (
    <div>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          id={id}
          name={id}
          value=""
          className="peer sr-only"
          defaultChecked={checked ? true : false}
        />
        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700"></div>
        <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-300">
          {text}
        </span>
      </label>
    </div>
  );
}
