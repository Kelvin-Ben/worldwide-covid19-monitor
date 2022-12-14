import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { BiArrowBack } from 'react-icons/bi';
import { BsFillMicFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';

import { fetchCovid } from '../store/covid/covid';

const Details = () => {
  const dispatch = useDispatch();

  const countryData = useSelector((state) => state.covidReducer.covidData);
  if (countryData.length === 0) {
    dispatch(fetchCovid());
  }
  const params = useParams();

  const country = countryData.find((item) => item.Country === params.id);

  return (
    <div>
      {countryData.length === 0 && (
        <div className="text-center mt-32">
          <h1 className="text-2xl">Please hold as data is being fetched...</h1>
        </div>
      )}
      {country && (
        <>
          <div className="py-5 hero text-white">
            <div className="container mx-auto flex items-center justify-between px-5">
              <Link to="/">
                <BiArrowBack className="text-4xl" />
              </Link>
              <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl">
                  {country.Country}
                </h1>
              </div>
              <div className="flex items-center">
                <BsFillMicFill className="mx-2 text-lg" />
                <IoMdSettings className="ml-2 text-xl" />
              </div>
            </div>
          </div>
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: -10 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-16 mb-32 main-bg container mx-auto px-10"
          >
            <div className="flex justify-between items-center text-black border border-pink-400 p-8">
              <h3 className="text-lg md:text-2xl font-semibold">
                New Comfirmed
              </h3>
              <p className="text-xl md:text-2xl text-black-100">
                {country.NewConfirmed}
              </p>
            </div>
            <div className="flex justify-between items-center text-black border border-pink-400 p-8">
              <h3 className="text-lg md:text-2xl font-semibold">
                Total Comfirmed
              </h3>
              <p className="text-xl md:text-2xl text-black-100">
                {country.TotalConfirmed}
              </p>
            </div>
            <div className="flex justify-between items-center text-black border border-pink-400 p-8">
              <h3 className="text-lg md:text-2xl font-semibold">New Death</h3>
              <p className="text-xl md:text-2xl text-black-100">
                {country.NewDeaths}
              </p>
            </div>
            <div className="flex justify-between items-center text-black border border-pink-400 p-8">
              <h3 className="text-lg md:text-2xl font-semibold">Total Death</h3>
              <p className="text-xl md:text-2xl text-black-100">
                {country.TotalDeaths}
              </p>
            </div>
            <div className="flex justify-between items-center text-black border border-pink-400 p-8">
              <h3 className="text-lg md:text-2xl font-semibold">
                New Recovered
              </h3>
              <p className="text-xl md:text-2xl text-black-100">
                {country.NewRecovered}
              </p>
            </div>
            <div className="flex justify-between items-center text-black border border-pink-400 p-8">
              <h3 className="text-lg md:text-2xl font-semibold">
                Total Recovered
              </h3>
              <p className="text-xl md:text-2xl text-black-100">
                {country.TotalRecovered}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};
export default Details;
