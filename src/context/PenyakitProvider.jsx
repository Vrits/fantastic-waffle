import { useState } from "react";
import PenyakitContext from "./PenyakitContext";

const PenyakitProvider = (props) => {
  const gejala = [
    {
      code: "GD01",
      name: "Bau mulut",
    },
    {
      code: "GD02",
      name: "Gusi bengkak, merah dan berdarah",
    },
    {
      code: "GD03",
      name: "Gingival berkaratin, gaung luka diantara gigi dan gusi",
    },
    {
      code: "GD04",
      name: "Pembesaran limfoid di kepala, leher, atau rahang",
    },
    {
      code: "GD05",
      name: "Demam",
    },
    {
      code: "GD06",
      name: "Nyeri gusi",
    },
    {
      code: "GD07",
      name: "Sakit gigi",
    },
    {
      code: "GD08",
      name: "Nyeri ringan hingga tajam saat mengonsumsi makanan manis",
    },
    {
      code: "GD09",
      name: "Noda berwarna cokelat, hitam atau putih pada permukaan gigi",
    },
    {
      code: "GD10",
      name: "Nyeri saat menggigit makanan",
    },
    {
      code: "GD11",
      name: "Gusi berdarah dan kemerahan",
    },
    {
      code: "GD12",
      name: "Gusi membengkak dan atau bernanah",
    },
    {
      code: "GD13",
      name: "Gusi melorot atau gigi tampak menjadi panjang",
    },
    {
      code: "GD14",
      name: "Gigi goyang dan sensitive",
    },
    {
      code: "GD15",
      name: "Gigi menjadi meregang (timbul celah-celah diantara gigi)",
    },
    {
      code: "GD16",
      name: "Gigi menjadi linu padahal tidak ada yang berlubang",
    },
    {
      code: "GD17",
      name: "Hilangnya nafsu makan",
    },
    {
      code: "GD18",
      name: "Terdapat luka yang cukup besar dimulut",
    },
    {
      code: "GD19",
      name: "Luka biasanya terjadi beberapa kali pada area yang sama",
    },
    {
      code: "GD20",
      name: "Luka menyebar ke bagian luar bibir",
    },
    {
      code: "GD21",
      name: "Tidak dapat makan dan minum",
    },
    {
      code: "GD22",
      name: "Rasa pahit dimulut",
    },
    {
      code: "GD23",
      name: "Gelisah",
    },
    {
      code: "GD24",
      name: "Kelelahan",
    },
    {
      code: "GD25",
      name: "Gusi mudah berdarah",
    },
    {
      code: "GD26",
      name: "Terdapat kantung nanah yang seperti benjolan dengan warna kuning",
    },
    {
      code: "GD27",
      name: "Kelenjer getah bening di bawah rahang membengkak",
    },
    {
      code: "GD28",
      name: "Mengunyah dan menelan makanan menyebabkan rasa nyeri",
    },
    {
      code: "GD29",
      name: "Pecah-pecah dan kemerahan pada sudut mulut",
    },
    {
      code: "GD30",
      name: "Muncul bintik-bintik kuning, putih atau krem di dalam mulut",
    },
    {
      code: "GD31",
      name: "Sedikit pendarahan apabila lesi tergores",
    },
    {
      code: "GD32",
      name: "Lesi menyerupai keju",
    },
    {
      code: "GD33",
      name: "Di dalam mulut seperti kapas",
    },
    {
      code: "GD34",
      name: "Kehilangan selera makan",
    },
    {
      code: "GD35",
      name: "Mengunyah dan menelan makanan menyebabkan rasa nyeri",
    },
    {
      code: "GD36",
      name: "Ujung-ujung gusi yang terletak diantara dua gigi mengalami pengikisan",
    },
    {
      code: "GD37",
      name: "Rasa sakit dan tidak nyaman pada mulut saat makan makanan manis atau asam",
    },
    {
      code: "GD38",
      name: "Rasa tidak nyaman pada saat cuaca dingin",
    },
    {
      code: "GD39",
      name: "Sakit pada saat menyikat gigi",
    },
    {
      code: "GD40",
      name: "Gusi menurun",
    },
  ];

  const [selectedGejala, setSelectedGejala] = useState([]);

  const onSelectGejala = (gejalaId, gejalaName) => {
    if (selectedGejala.find((e) => e.code == gejalaId)) {
      const filteredGejala = selectedGejala.filter((e) => e.code !== gejalaId);
      setSelectedGejala(filteredGejala);

      return;
    }
    const arr = [
      ...selectedGejala,
      {
        code: gejalaId,
        name: gejalaName,
      },
    ];
    setSelectedGejala(arr);

    // console.log(arr);
  };

  const penyakit = [
    {
      code: "PD01",
      name: "Gingivitis (Radang gusi)",
    },
    {
      code: "PD02",
      name: "Karies Gigi (gigi berlubang)",
    },
    {
      code: "PD03",
      name: "Karang Gigi",
    },
    {
      code: "PD04",
      name: "Stomatitis",
    },
    {
      code: "PD05",
      name: "Abses Periodental",
    },
    {
      code: "PD06",
      name: "Candidas Oral",
    },
    {
      code: "PD07",
      name: "Trench Mouth",
    },
    {
      code: "PD08",
      name: "Gigi Sensitif",
      // hasPenyakit : selectedGejala.includes
    },
  ];

  const penyakitData = {
    penyakit,
    gejala,
    selectedGejala,
    onSelectGejala,
  };

  return (
    <PenyakitContext.Provider value={penyakitData}>
      {props.children}
    </PenyakitContext.Provider>
  );
};

export default PenyakitProvider;
