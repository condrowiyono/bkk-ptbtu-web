import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { FormContainer } from "./ui/form-container";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export const ContactUs = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-center text-3xl font-bold leading-loose">
        Hubungi Kami
      </h1>
      <p className="text-center text-xl text-gray-600">
        Apabila Anda memiliki pertanyaan, kami siap untuk membantu Anda
      </p>
      <form className="mt-8 grid grid-cols-1 gap-4 p-8 sm:px-12 md:grid-cols-2 md:px-32">
        <FormContainer>
          <Input placeholder="Nama" />
        </FormContainer>
        <FormContainer>
          <Input placeholder="Email" />
        </FormContainer>
        <FormContainer>
          <Select>
            <SelectTrigger aria-label="Keperluan">
              <SelectValue placeholder="Keperluan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pertanyaan">Pertanyaan</SelectItem>
              <SelectItem value="kerjasama">Kerjasama</SelectItem>
            </SelectContent>
          </Select>
        </FormContainer>
        <FormContainer>
          <Input placeholder="Nomor Telepon" />
        </FormContainer>
        <FormContainer className="col-span-1 md:col-span-2">
          <Textarea placeholder="Pesan" />
        </FormContainer>
        <Button className="col-span-1 w-full md:col-span-2">Kirim Pesan</Button>
      </form>
    </div>
  );
};
