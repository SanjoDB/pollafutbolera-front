"use client";
import * as React from "react";

interface UploadAreaProps {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

export function UploadArea({ file, setFile }: UploadAreaProps) {
  const [preview, setPreview] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [file]);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith("image/")) {
      setFile(droppedFile);
    } else {
      alert("Solo se permiten archivos de imagen.");
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
    } else {
      alert("Solo se permiten archivos de imagen.");
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <section
        className="flex flex-col items-center justify-center p-6 mt-10 max-w-full text-xs tracking-normal bg-white rounded-lg border border-black border-dashed w-[600px] max-md:px-5 mx-auto"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
    >
        <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9f0994ecc0c042a49fa6850af9739d2b94f47be65eab28d3e67b96ad1280e9e?placeholderIfAbsent=true"
            alt="Icono de carga"
            className="object-contain self-center aspect-square w-[42px]"
        />
        <div className="flex flex-col items-center mt-3 w-full max-md:max-w-full">
            <p className="gap-1 self-stretch w-full text-sm leading-none text-neutral-950 max-md:max-w-full text-center">
            Arrastra tu imagen para comenzar a subir
            </p>
            <div className="flex gap-3 items-center mt-2 max-w-full text-center whitespace-nowrap text-neutral-500 w-[201px]">
                <div className="flex flex-1 shrink self-stretch my-auto w-20 h-0 basis-0 bg-neutral-200" />
                <span className="self-stretch my-auto">O</span>
                <div className="flex flex-1 shrink self-stretch my-auto w-20 h-0 basis-0 bg-neutral-200" />
            </div>
            <div className="flex items-start mt-2 font-semibold text-blue-700">
                <label className="gap-2 self-stretch px-3 py-1.5 bg-white rounded-lg border border-sky-700 border-solid cursor-pointer">
                    Buscar archivos
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </label>
            </div>
            {preview && (
                <img
                    src={preview}
                    alt="Preview"
                    className="mt-4 object-contain w-32 h-32 border border-solid border-gray-300 rounded"
                />
            )}
        </div>
        {file && (
            <div className="mt-4 text-center">
            <p className="text-sm text-neutral-950">Archivo seleccionado:</p>
            <p className="text-sm text-neutral-950">{file.name}</p>
            </div>
        )}
    </section>
  );
}