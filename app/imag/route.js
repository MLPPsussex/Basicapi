 import { products } from 'wix-stores.v2';
import { NextResponse } from 'next/server';

export async function GET() {
  const result = await products.addProductMedia("e1247aa3-a55c-a7bd-15a1-71b361e5c38a",
                                                    "https://cdn.leonardo.ai/users/0e8276ab-02bb-4150-a141-96f6401e19d9/generations/dde5db44-beb2-41a4-ac4e-3ec2c59aec12/Leonardo_Diffusion_panda_0.jpg"    );

  return NextResponse.json({ res: "1"});
}

