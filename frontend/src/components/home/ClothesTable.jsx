import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';

import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
const ClothesTable = ({clothes}) => {
  return (
    <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No</th>
              <th className="border border-slate-600 rounded-md">
                productName
              </th>
              <th className="border border-slate-600 rounded-md">Brand</th>
              <th className="border border-slate-600 rounded-md">Category</th>
              <th className="border border-slate-600 rounded-md">
                publishYear
              </th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {clothes.map((clothe, index) => (
              <tr key={clothe._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {clothe.productName}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {clothe.Brand}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {clothe.Category}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {clothe.publishYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/clothes/details/${clothe._id}`}>
                      <BsInfoCircle className="text-2x1 text-green-800" />
                    </Link>
                    <Link to={`/clothes/edit/${clothe._id}`}>
                      <AiOutlineEdit className="text-2x1 text-yellow-600" />
                    </Link>
                    <Link to={`/clothes/delete/${clothe._id}`}>
                      <MdOutlineDelete className="text-2x1 text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default ClothesTable