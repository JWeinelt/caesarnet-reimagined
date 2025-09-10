import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Shield, Star, Crown, Check } from "lucide-react";
import { toast } from "sonner";

const plans = [
  {
    id: "bronze",
    name: "Bronze Support",
    price: "Free",
    icon: Shield,
    emoji: "🥉",
    color: "text-amber-600",
    borderColor: "border-amber-200",
    features: [
        "Community Support",
        "Access to the forum",
        "Open support channels on Discord",
        "Caesar Documentation"
    ]
  },
  {
    id: "silver",
    name: "Silver Support",
    price: "€5/month",
    icon: Star,
    emoji: "🥈",
    color: "text-gray-600",
    borderColor: "border-gray-300",
    popular: true,
    features: [
        "Support via eMail (12hrs in average)",
        "Priority in Discord Tickets",
        "Priority at Discord support",
        "Dedicated support and setup-service",
        "Free hosting of your Caesar instance"
    ]
  },
  {
    id: "gold",
    name: "Gold Support",
    price: "€15/month",
    icon: Crown,
    emoji: "🥇",
    color: "text-yellow-600",
    borderColor: "border-yellow-300",
    features: [
        "Support via eMail (1hr in average)",
        "Phone support",
        "Highest priority on Discord",
        "Dedicated point of contact",
        "Custom Integration Support",
        "Priority Plugin Reviews",
        "Free sub-domain for your hosted instance"
    ]
  }
];

const formSchema = z.object({
  plan: z.string().min(1, "Please select a plan"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Buying = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plan: "",
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast.success("Thank you! We'll contact you shortly to complete your purchase.");
    // Here you would integrate with your payment system
  };

  const selectedPlanData = plans.find(plan => plan.id === selectedPlan);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Choose Your Caesar Support Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect support level for your Caesar deployment and provide your details to get started.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Plan Selection */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Select Your Plan</h2>
            <Form {...form}>
              <FormField
                control={form.control}
                name="plan"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) => {
                          field.onChange(value);
                          setSelectedPlan(value);
                        }}
                        value={field.value}
                        className="space-y-4"
                      >
                        {plans.map((plan) => {
                          const Icon = plan.icon;
                          return (
                            <div key={plan.id} className="flex items-center space-x-3">
                              <RadioGroupItem value={plan.id} id={plan.id} />
                              <Label htmlFor={plan.id} className="flex-1 cursor-pointer">
                                <Card className={`transition-all hover:shadow-md ${
                                  field.value === plan.id ? `${plan.borderColor} border-2` : ''
                                } ${plan.popular ? 'scale-105 shadow-lg' : ''}`}>
                                  <CardHeader className="pb-4">
                                    <div className="flex items-center gap-3">
                                      <div className="text-2xl">{plan.emoji}</div>
                                      <Icon className={`h-6 w-6 ${plan.color}`} />
                                      <div>
                                        <CardTitle className="text-lg">{plan.name}</CardTitle>
                                        <CardDescription className="text-lg font-semibold">
                                          {plan.price}
                                        </CardDescription>
                                      </div>
                                      {plan.popular && (
                                        <div className="ml-auto bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                                          Popular
                                        </div>
                                      )}
                                    </div>
                                  </CardHeader>
                                  <CardContent>
                                    <ul className="space-y-2">
                                      {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                                          <span className="text-sm">{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </CardContent>
                                </Card>
                              </Label>
                            </div>
                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Form>
          </div>

          {/* Contact Details Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Your Details</h2>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  We'll use this information to set up your account and process your order.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company Inc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {selectedPlanData && (
                      <div className="mt-6 p-4 bg-muted rounded-lg">
                        <h3 className="font-semibold mb-2">Selected Plan</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{selectedPlanData.emoji}</span>
                          <span className="font-medium">{selectedPlanData.name}</span>
                          <span className="text-muted-foreground">- {selectedPlanData.price}</span>
                        </div>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full mt-6" 
                      size="lg"
                      disabled={!selectedPlan}
                    >
                      {selectedPlan === 'bronze' ? 'Get Started Free' : 'Continue to Payment'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Buying;