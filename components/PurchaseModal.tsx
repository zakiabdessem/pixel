import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_URL } from "@/lib/api";
import Image from "next/image";

interface PurshaceModalProps {
  productId: string;
  colorId: string;
  size: string;
  onClose: () => void;
  coupon?: string;
}

interface FormValueProps {
  productId: string;
  colorId: string;
  coupon?: string;
  billingDetails: {
    first_name: string;
    last_name: string;
    city: string;
    state: string;
    adress: string;
    phone_number: string;
    type_of_delivery: number;
  };
  note: string;
}

function PurchaseModal({
  onClose,
  productId,
  colorId,
  size,
  coupon,
}: PurshaceModalProps) {
  const [generalError, setGeneralError] = useState("");
  const [successModal, setSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      productId,
      colorId,
      size,
      coupon,
      billingDetails: {
        first_name: "",
        last_name: "",
        city: "",
        state: "",
        adress: "",
        phone_number: "",
        type_of_delivery: 1,
      },
      note: "",
    },
  });

  const onFormSubmit = async (data: FormValueProps) => {
    try {
      //check if number is valid and length is 10
      if (!/^[0-9]{10}$/.test(data.billingDetails.phone_number)) {
        setError("billingDetails.phone_number", {
          type: "manual",
          message: "Veuillez saisir un numéro de téléphone valide",
        });
        return;
      }

      await axios.post(`${API_URL}/orders/create`, data);

      setGeneralError("");
      setSuccessModal(true);
    } catch (e: any) {
      const errorMessage =
        e.response && e.response.data && e.response.data.message
          ? e.response.data.message
          : "An error occurred, please try again.";
      setGeneralError(errorMessage);
    }
  };

  return (
    <div className="fixed inset-0 overflow-y-auto z-50">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        {/* Adjust the max height and overflow properties here */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl max-h-full overflow-y-auto my-custom-class">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex flex-col">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-full hover:bg-[#fae4ce] bg-[#fff4ea] sm:mx-0 sm:h-7 sm:w-7">
                <button onClick={onClose}>
                  <svg
                    className="h-6 w-6 text-[#ECB176]"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div className="max-w-6xl mx-auto p-4 z-50">
                  {!successModal && (
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                      <div className="flex flex-col justify-start items-center">
                        <h1>
                          Veuillez saisir vos informations, s&apos;il vous plaît
                        </h1>
                        {generalError && (
                          <div className="text-red-500">{generalError}</div>
                        )}
                        <div className="flex flex-col justify-center items-start">
                          <div className="flex">
                            <div className="flex flex-col w-full m-2">
                              <label
                                htmlFor="first_name"
                                className="mb-2 font-semibold text-gray-700">
                                Nom
                              </label>
                              <input
                                {...register("billingDetails.first_name", {
                                  required: true,
                                })}
                                type="text"
                                id="first_name"
                                name="billingDetails.first_name"
                                className={`form-control block
                              w-full px-3 py-2 text-base font-normal
                              ${
                                errors.billingDetails?.first_name
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } bg-white bg-clip-padding
                             border border-solid border-gray-300
                             rounded transition
                             ease-in-out
                           focus:text-gray-700 focus:bg-white focus:border-[#ECB176] focus:outline-none`}
                                placeholder="Name"
                              />
                            </div>
                            <div className="flex flex-col w-full m-2">
                              <label
                                htmlFor="last_name"
                                className="mb-2 font-semibold text-gray-700">
                                Prénom
                              </label>
                              <input
                                {...register("billingDetails.last_name", {
                                  required: true,
                                })}
                                type="text"
                                id="last_name"
                                name="billingDetails.last_name"
                                className={`form-control block
                              w-full px-3 py-2 text-base font-normal
                              ${
                                errors.billingDetails?.last_name
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded transition
                              ease-in-out
                              focus:text-gray-700 focus:bg-white focus:border-[#ECB176] focus:outline-none`}
                                placeholder="Prénom"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col w-full m-2">
                            <label
                              htmlFor="city"
                              className="mb-2 font-semibold text-gray-700">
                              Wilaya
                            </label>
                            <input
                              {...register("billingDetails.city", {
                                required: true,
                              })}
                              type="text"
                              id="city"
                              name="billingDetails.city"
                              className={`form-control block w-full px-3 py-2 text-base font-normal ${
                                errors.billingDetails?.city
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-[#ECB176] focus:outline-none`}
                              placeholder="Wilaya"
                            />
                          </div>

                          <div className="flex flex-col w-full m-2">
                            <label
                              htmlFor="commune"
                              className="mb-2 font-semibold text-gray-700">
                              City
                            </label>
                            <input
                              {...register("billingDetails.state", {
                                required: true,
                              })}
                              type="text"
                              id="commune"
                              name="billingDetails.state"
                              className={`form-control block w-full px-3 py-2 text-base font-normal ${
                                errors.billingDetails?.state
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-[#ECB176] focus:outline-none`}
                              placeholder="City"
                            />
                          </div>

                          <div className="flex flex-col w-full m-2">
                            <label
                              htmlFor="adresse"
                              className="mb-2 font-semibold text-gray-700">
                              Address
                            </label>
                            <input
                              {...register("billingDetails.adress", {
                                required: true,
                              })}
                              type="text"
                              id="adresse"
                              name="billingDetails.adress"
                              className={`form-control block w-full px-3 py-2 text-base font-normal ${
                                errors.billingDetails?.adress
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-[#ECB176] focus:outline-none`}
                              placeholder="Adresse"
                              title="city"
                            />
                          </div>

                          <div className="flex flex-col w-full m-2">
                            <label
                              htmlFor="phone"
                              className="mb-2 font-semibold text-gray-700">
                              Téléphone
                            </label>
                            <input
                              {...register("billingDetails.phone_number", {
                                required: true,
                              })}
                              type="text"
                              id="phone"
                              name="billingDetails.phone_number"
                              className={`form-control block w-full px-3 py-2 text-base font-normal ${
                                errors.billingDetails?.phone_number
                                  ? "border-red-500"
                                  : "border-gray-300"
                              } bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-[#ECB176] focus:outline-none`}
                              placeholder="Numéro de téléphone"
                              pattern="^[0-9]{10}$"
                              title="phone number"
                            />
                          </div>

                          <div className="flex flex-col w-full m-2">
                            <label
                              htmlFor="Adresse"
                              className="mb-2 font-semibold text-gray-700">
                              Note (optionnel)
                            </label>
                            <input
                              {...register("note")}
                              type="text"
                              id="note"
                              name="note"
                              className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-[#ECB176] focus:outline-none"
                              placeholder="n'importe quel détail"
                              title="note"
                            />
                          </div>

                          <div className="flex flex-col w-full m-2">
                            <label
                              htmlFor="coupon"
                              className="mb-2 font-semibold text-gray-700">
                              Livraison
                            </label>
                            <div className="relative">
                              <select
                                {...register(
                                  "billingDetails.type_of_delivery",
                                  {
                                    required: true,
                                  }
                                )}
                                id="size"
                                className="form-select appearance-none
                            block w-full px-3 py-2 text-base font-normal
                           text-gray-700 bg-white bg-clip-padding bg-no-repeat
                           border border-solid border-gray-300
                           rounded transition
                           ease-in-out
                         focus:text-gray-700 focus:bg-white focus:border-[#ECB176] focus:outline-none pr-10"
                                aria-label="type de livraison">
                                <option value={2}>Domicile</option>
                                <option value={1}>Stop desk</option>
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                {/* Replace this with your Image component and the correct path to your down arrow image */}
                                <Image
                                  src="/down-arrow.png"
                                  className="fill-current h-4 w-4"
                                  alt="Arrow"
                                  width={16}
                                  height={16}
                                />
                              </div>
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="m-2 p-2 text-nowrap bg-[#ECB176] inline-flex items-center justify-center text-base font-medium text-center text-white hover:text-gray-800 border border-[#ECB176] rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                            Suivant
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                  {successModal && (
                    <div className="flex flex-col justify-center items-center mb-0">
                      <h1>Votre achat effectué avec succès</h1>
                      <Image
                        src="/smile-emoji.svg"
                        alt=""
                        className="w-5 h-5 m-2"
                        width={20}
                        height={20}
                      />
                      <a
                        href="/"
                        className="m-2 p-2 text-nowrap bg-[#ECB176] inline-flex items-center justify-center text-base font-medium text-center text-white hover:text-gray-800 border border-[#ECB176] rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                        Retour à la page d&apos;accueil
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseModal;
