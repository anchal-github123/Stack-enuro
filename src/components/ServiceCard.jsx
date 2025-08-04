import Button from "./Button";
export default function ServiceCard({ service }) {
  return (
    <div className="p-4 bg-sky-50 rounded-2xl flex flex-col gap-3 shadow-2xs border border-transparent transition-all duration-300 hover:border-primary">
      <div className="rounded-full bg-white border-2 h-15 w-15 flex items-center justify-center p-2">
        {service.icon}
      </div>
      <div>
        <h2 className="text-[1.3rem] text-primary">{service.title}</h2>
        <p className="text-gray-500">{service.description}</p>
      </div>
      <Button name="Explore More" styleType="" link={service.link}/>
    </div>
  );
}
