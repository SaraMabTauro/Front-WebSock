import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonBreastfeeding } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from 'react-router-dom';
import Swal from "sweetalert2";

export default function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Autenticación exitosa",
          showConfirmButton: false,
          timer: 1500,
        });

        Navigate("/dashboard");
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Error: ${errorData.message}`,
        });
      }
    } catch (error) {
      console.error("Error de red:", error);
      Swal.fire({
        icon: "error",
        title: "Error de red",
        text: "Intenta nuevamente más tarde.",
      });
    }
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center bg-gradient-to-b from-teal-100 to-teal-300 bg">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="text-center sm:mx-auto sm:w-full sm:max-w-sm">
            <FontAwesomeIcon
              icon={faPersonBreastfeeding}
              className="text-teal-500 mx-auto h-16 w-16 mb-4"
              alt="empress"
            />
            <h2 className="text-3xl font-bold text-teal-600">Inicia Sesión</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-cyan-700"
                >
                  Email de Usuario
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-cyan-600 shadow-sm ring-1 ring-inset ring-cyan-700 placeholder:text-cyan-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="contraseña"
                    className="block text-sm font-medium leading-6 text-cyan-700"
                  >
                    Contraseña
                  </label>
                  <div className="text-sm">
                    <span
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      ¿Olvidaste la Contraseña?
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="contraseña"
                    name="contraseña"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-cyan-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              ¿No eres miembro?{" "}
              <span
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 "
              >
                ¡Empieza Ya!
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
