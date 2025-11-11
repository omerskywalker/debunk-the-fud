import FudCard from '../FudCard';

export default function FudCardExample() {
  return (
    <div className="p-8 max-w-md">
      <FudCard
        fud="Bitcoin wastes too much energy"
        rebuttal="Bitcoin mining often utilizes surplus energy from renewable sources or energy that would otherwise be wasted. Bitcoin mining turns excess waste into treasure."
        index={0}
      />
    </div>
  );
}
