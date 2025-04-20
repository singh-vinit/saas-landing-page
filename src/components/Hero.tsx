import Button from "./Button";

export default function Hero() {
  return (
    <div>
      <div className="w-fit mx-auto mb-[4rem] px-2 py-1 rounded-full bg-gradient-to-r from-violet-400 to-pink-400 text-sm text-black font-medium">
        $7.5 million seed round raised
      </div>
        <h1 className="w-fit mx-auto text-[4rem] font-bold text-white font-mono leading-4">
          Impactful design,
        </h1>
        <h1 className="w-fit mx-auto  text-[4rem] font-bold text-white font-mono">
          created effortlessly
        </h1>
        <p className="text-lg font-medium text-gray-500 max-w-xl mx-auto my-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sequi vitae, vero eos odit ipsam ullam non delectus autem dicta!</p>
        <div className="border border-gray-500/45 flex items-center w-fit rounded-full px-2 py-1 mx-auto">
            <input type="email" placeholder="Enter your email" className="text-white w-[20rem] p-4 focus:outline-0" />
            <Button text="sign up" className="bg-lime-400 text-black border-2 border-white" />
        </div>
    </div>
  );
}
