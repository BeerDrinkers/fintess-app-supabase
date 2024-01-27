'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
// Form
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export default function RegisterPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <div className='space-y-1'>
          <h1 className='font-semibold tracking-tight text-2xl'>
            Create an account
          </h1>
          <p className='text-muted-foreground text-sm'>
            Enter your details below to create your account
          </p>
        </div>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='john.doe@example.com' {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder='Password' {...field} />
              </FormControl>
              <FormDescription>
                Password must have at least 8 characters
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='w-full'>
          Register
        </Button>

        <p className='text-muted-foreground text-sm leading-relaxed px-8 text-center'>
          By clicking Register, you agree to our{' '}
          <Link
            href='/terms'
            className='underline underline-offset-4 hover:text-foreground'
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            href='/privacy'
            className='underline underline-offset-4 hover:text-foreground'
          >
            Privacy Policy
          </Link>
          .
        </p>
        <Separator />
        <p className='text-sm text-muted-foreground text-center'>
          Already have an account?{' '}
          <Link href='/login' className='text-foreground font-medium'>
            Sign in
          </Link>
        </p>
      </form>
    </Form>
  )
}
