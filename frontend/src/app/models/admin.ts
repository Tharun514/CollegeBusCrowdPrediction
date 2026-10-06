export interface Admin {

  adminId?: number;

  username: string;

  password: string;

  email?: string;

  role?: string;

  fullName?: string;

  photoUrl?: string;

  otp?: string;

  otpExpiry?: string;

  createdAt?: string;

}