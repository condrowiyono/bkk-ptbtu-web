"use client";
import { signIn } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormContainer } from "@/components/ui/form-container";

type LoginInput = {
  username: string;
  password: string;
};

type PageProps = {
  searchParams: { error?: string };
};

export default function LoginPage({ searchParams }: PageProps) {
  const [inputs, setInputs] = useState<LoginInput>({
    username: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await signIn("credentials", {
      username: inputs.username,
      password: inputs.password,
      callbackUrl: "/",
    });
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <FormContainer>
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          name="username"
          type="text"
          autoComplete="off"
          required
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </FormContainer>

      <FormContainer>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="off"
          required
          value={inputs.password || ""}
          onChange={handleChange}
        />
      </FormContainer>

      <div>
        <Button type="submit">Sign in</Button>
      </div>
      {searchParams.error && (
        <p className="text-red-600 text-center capitalize">Login failed.</p>
      )}
    </form>
  );
}
