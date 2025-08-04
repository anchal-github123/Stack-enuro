import { branchAddresses, ITservicesLinks, otherServicesLinks } from "../utils/FooterData";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-3">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Branch Addresses */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Branch Addresses</h3>
          <ul className="space-y-3 text-sm">
            {branchAddresses.map((branch, index) => (
              <li key={index}>
                <p className="font-medium">{branch.city}</p>
                <p className="text-gray-400">{branch.address}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* IT Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">IT Services</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            {ITservicesLinks.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Other Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Other Services</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            {otherServicesLinks.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

      </div>
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Stackneuro All rights reserved.
      </div>
    </footer>
  );
}

  

