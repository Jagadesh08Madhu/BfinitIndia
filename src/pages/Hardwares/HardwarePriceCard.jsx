import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bonusHardwareProduct from '../../data/bonusHardwareProduct';

export default function HardwarePriceCard({ product }) {
  const [selectedRam, setSelectedRam] = useState(product?.rams?.[0] || null);
  const [selectedStorage, setSelectedStorage] = useState((product?.ssd || product?.storage)?.[0] || null);
  const [basePrice, setBasePrice] = useState(0); // USD
  const [convertedPrice, setConvertedPrice] = useState(0);
  const [currency, setCurrency] = useState("INR");
  const [rates, setRates] = useState({});

  // 1. Fetch live exchange rates on mount
  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(res => res.json())
      .then(data => {
        setRates(data.rates);
      })
      .catch(err => console.error("Failed to fetch exchange rates", err));
  }, []);

  // 2. Calculate base USD price whenever RAM or Storage changes
  useEffect(() => {
    if (selectedRam && selectedStorage && product?.price) {
      const priceUSD = product.price(selectedRam.id, selectedStorage.id);
      setBasePrice(priceUSD);
    }
  }, [selectedRam, selectedStorage, product]);

  // 3. Convert to selected currency
  useEffect(() => {
    if (rates[currency]) {
      const converted = basePrice * rates[currency];
      setConvertedPrice(converted.toFixed(2));
    }
  }, [basePrice, currency, rates]);

  return (
    <div className="flex flex-col justify-between gap-4 rounded border border-gray-200 p-6 shadow">
      <h5 className="text-lg font-bold text-primary">{product?.name}</h5>

      {/* Currency selector */}
      <div className="flex items-center gap-3">
        <label className="text-sm font-semibold">Currency:</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="rounded border border-primary px-3 py-1"
        >
          {Object.keys(rates).map((cur, i) => (
            <option key={i} value={cur}>
              {cur}
            </option>
          ))}
        </select>
      </div>

      {/* Processor Info */}
      <div className="flex items-center gap-3">
        <img src="https://www.server4you.com/p-xeon.svg" alt="Processor" loading="lazy" className="h-[60px]" />
        <div>
          <p className="text-sm font-medium">{product?.processor?.model}</p>
          <p className="text-sm border-t">
            {product?.processor?.core}, {product?.processor?.clock}, {product?.processor?.cache}, {product?.processor?.tdp}
          </p>
        </div>
      </div>

      {/* Specs */}
      {['case', 'board', 'cooler', 'psu'].map((key) => (
        <p key={key} className="flex items-start gap-2 text-sm">
          <FaCheck className="mt-1 text-primary min-w-[16px]" />
          <span>{product?.[key]}</span>
        </p>
      ))}

      {/* RAM Selection */}
      {product?.rams?.length > 0 && (
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-primary">RAM</label>
          <select
            value={selectedRam?.id || ''}
            onChange={(e) =>
              setSelectedRam(product.rams.find((r) => r.id === Number(e.target.value)))
            }
            className="rounded border border-primary px-3 py-1 focus:outline-none"
          >
            {product.rams.map((ram) => (
              <option key={ram.id} value={ram.id}>
                {ram.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Storage Selection */}
      {(product?.ssd || product?.storage) && (
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-primary">Storage</label>
          <select
            value={selectedStorage?.id || ''}
            onChange={(e) =>
              setSelectedStorage(
                (product.ssd || product.storage).find((s) => s.id === Number(e.target.value))
              )
            }
            className="rounded border border-primary px-3 py-1 focus:outline-none"
          >
            {(product?.ssd || product?.storage).map((storage) => (
              <option key={storage.id} value={storage.id}>
                {storage.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Price Display */}
      <div className="space-y-2">
        <p className="text-center text-sm font-semibold">You are paying</p>
        <p className="text-3xl font-bold text-center">
          {currency} {convertedPrice}
        </p>
      </div>

      {/* Free Products */}
      <ul className="mt-1.5">
        {bonusHardwareProduct.map((item, index) => (
          <li key={index} className="flex gap-2 text-sm">
            <FaCheck className="mt-0.5 min-w-fit text-primary" />
            <span className="flex-1">
              {item?.name} - Gift Value: {item?.price}
              <span className="text-xs">/yr</span>
            </span>
          </li>
        ))}
      </ul>

      <Link to="/contact" target="_blank" className="mt-10 rounded-xl bg-primary px-4 py-2 text-center text-white">
        Contact Us
      </Link>
    </div>
  );
}
