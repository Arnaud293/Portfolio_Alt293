import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
            <p className="text-4xl font-bold font-signature inline border-b-4 border-purple-800">About</p>
            </div>
            <p className="text-xl mt-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nemo quam
            quidem totam minus similique officiis laboriosam delectus nostrum, quo
            ullam fuga, laudantium libero? Doloremque temporibus quos excepturi,
            atque assumenda, fugiat dolores accusantium deleniti eos veritatis
            quis, cum aspernatur eius? Enim quaerat molestias quo suscipit et at
            esse in vero.
            </p>
            <br />
            <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore maxime
            tenetur quibusdam quidem! Eius sed qui id, quaerat minima quisquam
            enim, quasi illum ratione provident tempore ex quam, quia quod fugiat
            harum distinctio architecto iure nihil molestiae necessitatibus maxime
            possimus.
            </p>
      </div>
    </div>
  );
}

export default About;
