const information = document.getElementById("info");
information.innerText = `You are using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}) and Electron (v${versions.electron()})`;

const func = async () => {
  const response = await versions.ping();
  console.log(response);
};

func();
