import { useState } from 'react'

export default function UserForm() {

    // Guardar datos
    const [name, setName] = useState('')

    // Manejo de errores
    const [error, setError] = useState('')
    // Mensajes success
    const [success, setSuccess] = useState('')

    // Para validación de datos
    const maxLen = 50

    // URL para evíar datos
    const apiURL = "http://127.0.0.1:8000/api/v1/users"

    // Manejo de form
    const handleSubmit = async (e) => {
        // Detener envío
        e.preventDefault()

        // Reset mensajes
        setError('')
        setSuccess('')

        // == Validar datos ==

        // Input vacío
        const trimmed = name.trim()
        if (!trimmed) {
            setError('Ingresa un nombre válido')
            return
        }

        // Supera el límite de caracteres
        if (trimmed.length > maxLen) {
            setError(`El nombre no puede superar los ${maxLen} caracteres`)
            return
        }

        // Envíar formulario
        try {
            const res = await fetch(apiURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                // Envíar datos
                body: JSON.stringify({name: trimmed})
            })

            const data = await res.json()

            if (!res.ok) {
                setError("Error en el servidor")
            } else {
                setSuccess("Registro exitoso")
                setName("")
            }

        } catch (err) {
            setError('No fue posible conectarse al servidor')
        }
    }

    // HTML
    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto mt-4 p-4 border rounded shadow-sm"
            style={{ maxWidth: '480px' }}
        >
            {/* Campo de texto */}
            <div className="mb-3 text-start">
                <label htmlFor="user_name" className="form-label fw-semibold">
                    Nombre
                </label>
                <input
                    id="user_name"
                    type="text"
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Ingresa tu nombre"
                    maxLength={maxLen}
                />
                {error && <p className="text-danger mt-2 mb-0">{error}</p>}

                {success && <p className="text-success mt-2">{success}</p>}
            </div>

            {/* Botón */}
            <div className="text-center">
                <button type="submit" className="btn btn-primary px-4">
                    Guardar
                </button>
            </div>
        </form>
    )
}