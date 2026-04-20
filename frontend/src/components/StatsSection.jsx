import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'
import CountUp from 'react-countup' // npm i react-countup

const StatsSection = () => {
  const [stats, setStats] = useState({ jobs: 0, companies: 0, users: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/stats`);
        if (res.data.success) {
          setStats(res.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="bg-gray-50 py-1 my-18">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Growing <span className="text-[#6A38C2]">Community</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        
          <div>
            <h2 className="text-4xl font-bold text-[#6A38C2]">
              {loading ? "..." : <CountUp end={stats.jobs} duration={2} />}+
            </h2>
            <p className="text-gray-600 mt-2">Active Jobs</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#6A38C2]">
              {loading ? "..." : <CountUp end={stats.companies} duration={2} />}+
            </h2>
            <p className="text-gray-600 mt-2">Companies</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#6A38C2]">
              {loading ? "..." : <CountUp end={stats.users} duration={2} />}+
            </h2>
            <p className="text-gray-600 mt-2">Job Seekers</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#6A38C2]">
              24h
            </h2>
            <p className="text-gray-600 mt-2">Avg. Response Time</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default StatsSection