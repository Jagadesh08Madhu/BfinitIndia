import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Pricing({ sectionRef }) {
  const cores = [1, 2, 4, 6];
  const rams = [
    "4 GB RAM DDR4 ECC",
    "8 GB RAM DDR4 ECC",
    "16 GB RAM DDR4 ECC",
    "32 GB RAM DDR4 ECC",
  ];

  const configMap = {
    1: { ram: "4 GB RAM DDR4 ECC", storages: ["100 GB SSD", "250 GB HDD"], price: 14.5, productId: 9 },
    2: { ram: "8 GB RAM DDR4 ECC", storages: ["200 GB SSD", "500 GB HDD"], price: 21.5, productId: 10 },
    4: { ram: "16 GB RAM DDR4 ECC", storages: ["300 GB SSD", "1TB HDD"], price: 40.5, productId: 11 },
    6: { ram: "32 GB RAM DDR4 ECC", storages: ["500 GB SSD", "2TB HDD"], price: 69.5, productId: 12 },
  };

  const ramToCoreMap = {
    "4 GB RAM DDR4 ECC": 1,
    "8 GB RAM DDR4 ECC": 2,
    "16 GB RAM DDR4 ECC": 4,
    "32 GB RAM DDR4 ECC": 6,
  };

  const [core, setCore] = useState("");
  const [ram, setRam] = useState("");
  const [storage, setStorage] = useState("");
  const [storages, setStorages] = useState([]);
  const [priceUSD, setPriceUSD] = useState(0);
  const [productId, setProductId] = useState("");
  const [exchangeRates, setExchangeRates] = useState({});
  const [currencyCode, setCurrencyCode] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState(1); // 1 means 1 USD = 1 unit of selected currency

  // Fetch exchange rates on mount
  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        setExchangeRates(data.rates);
        setExchangeRate(data.rates["INR"]); // default to INR
      });
  }, []);

  // Sync RAM when core changes
  useEffect(() => {
    if (core && configMap[core]) {
      setRam(configMap[core].ram);
    }
  }, [core]);

  // Sync Core when RAM changes
  useEffect(() => {
    if (ram && ramToCoreMap[ram]) {
      setCore(ramToCoreMap[ram]);
    }
  }, [ram]);

  // Update price and storage when core changes
  useEffect(() => {
    if (core && configMap[core]) {
      const config = configMap[core];
      setStorages(config.storages);
      setPriceUSD(config.price);
      setProductId(config.productId);
      setStorage("");
    }
  }, [core]);

  const handleCurrencyChange = (e) => {
    const selected = e.target.value;
    setCurrencyCode(selected);
    setExchangeRate(exchangeRates[selected]);
  };

  const priceConverted = (priceUSD * exchangeRate).toFixed(2);

  return (
    <div ref={sectionRef} className="mx-5 py-5 md:flex md:justify-center md:py-10">
      <div className="rounded p-5 shadow-lg md:w-1/2 lg:w-1/3">
        <h5 className="text-center text-2xl font-semibold">Build your own VPS!</h5>

        <div className="my-5 flex flex-col gap-2.5">
          <label className="text-sm">Processor (Core)</label>
          <select
            onChange={(e) => setCore(Number(e.target.value))}
            value={core}
            className="w-full rounded-full border px-4 py-2 text-sm focus:outline-none"
          >
            <option value="">Choose an option</option>
            {cores.map((c, i) => (
              <option key={i} value={c}>{c} Core</option>
            ))}
          </select>

          <label className="text-sm">RAM</label>
          <select
            onChange={(e) => setRam(e.target.value)}
            value={ram}
            className="w-full rounded-full border px-4 py-2 text-sm focus:outline-none"
          >
            <option value="">Choose an option</option>
            {rams.map((r, i) => (
              <option key={i} value={r}>{r}</option>
            ))}
          </select>

          {storages.length > 0 && (
            <>
              <label className="text-sm">Storage</label>
              <select
                onChange={(e) => setStorage(e.target.value)}
                value={storage}
                className="w-full rounded-full border px-4 py-2 text-sm focus:outline-none"
              >
                <option value="">Choose an option</option>
                {storages.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>
            </>
          )}

          <label className="text-sm">Currency</label>
          <select
            onChange={handleCurrencyChange}
            value={currencyCode}
            className="w-full rounded-full border px-4 py-2 text-sm focus:outline-none"
          >
            {Object.keys(exchangeRates).map((code, i) => (
              <option key={i} value={code}>{code}</option>
            ))}
          </select>

          {core && ram && storage && (
            <div className="my-4 text-center text-lg font-semibold">
              <p>
                Total Price: <span className="text-primary">{currencyCode} {priceConverted}</span>{" "}
                <span className="text-xs">/ Per month</span>
              </p>
            </div>
          )}
        </div>

        {core && ram && storage && (
          <Link
            to={`https://hpanel.bfinit.com/checkout?productId=${productId}&packageType=server&ram=${ram}&storage=${storage}&timePeriod=1&currency=${currencyCode}&currencyRate=${exchangeRate}&storageVariantId=`}
            target="_blank"
            className="bg-primary inline-block w-full rounded-full px-4 py-2 text-center text-white"
          >
            Order Now
          </Link>
        )}
      </div>
    </div>
  );
}
